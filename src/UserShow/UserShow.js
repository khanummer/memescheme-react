import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './UserShow.css'

class UserShow extends Component {
    state = {
        user: []
    }
    componentDidMount() {
        this.findUser()
    }

    findUser = async () => {
        try {
            const userResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/${this.props.match.params.id}` ,{
                method: 'GET',
                credentials: 'include',
                headers: {
                "Content-Type": "application/json"
                }
            })
            
            const user = await userResponse.json()
            this.setState({
                user
            })
            console.log(user, 'got um')
        } catch(err) {
            console.log(err)
        }
    }



    deleteUser = async (e) => {
        console.log(e, 'THIS IS E')
        e.preventDefault();
        e.stopPropagation();
        try {
            const deletedResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/${this.props.match.params.id}` ,{
                method: 'DELETE',
                body: JSON.stringify(this.state.user),
                credentials: 'include',
                headers: {
                "Content-Type": "application/json"
                }
            })
            
            const deletedParsed = await deletedResponse.json()
            this.props.history.push('/  ')
        
        } catch(err) {
            console.log(err)
        }
    }
    
    render() {
        const { user } = this.state
        return (
            <div className="UserShow">
                <div>
                    <div className="usershow-username">{user.username}</div>
                    <div className="usershow-email">{user.email}</div>
                    <div className="usershow-buttons">
                        <button className="user-show-button" onClick={(e) => this.deleteUser(e)}>delete {user.username}</button>
                        <Link to={`/edit-user/${user.id}`}><button className="user-show-button" >edit {user.username}</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(UserShow)