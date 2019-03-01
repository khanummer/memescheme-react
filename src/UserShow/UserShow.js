import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './UserShow.css'

class UserShow extends Component {

    state = {
        user: []
    }

    componentDidMount() {
        this.setState({
            user: (this.props.users).filter(u => u.id == this.props.match.params.id)
        })
    }


    deleteUser = async (e) => {
        console.log(e, 'THIS IS E')
        e.preventDefault();
        try {
            const deletedResponse = await fetch(`http://localhost:8000/api/v1/users/${this.props.match.params.id}` ,{
                method: 'DELETE',
                body: JSON.stringify(this.state.user),
                credentials: 'include',
                headers: {
                "Content-Type": "application/json"
                }
            })
            
            const deletedParsed = await deletedResponse.json()
            console.log(deletedParsed)
 
        
        } catch(err) {
            console.log(err)
        }
    }
    
    
    
    render() {
        console.log(this.state.user[0])
        // console.log()
        // console.log((this.props.users || []).map(u => console.log(u.id, this.props.match.params.id)))
        return (
            <div className="UserShow">
                {this.state.user.map(u => 
                <div>
                    <h1>{u.username}</h1>
                    <button onClick={(e) => this.deleteUser(e)}>Delete User</button>
                </div>
                )}
            </div>
        )
    }
}


export default withRouter(UserShow)