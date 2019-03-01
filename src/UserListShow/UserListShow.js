import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './UserListShow.css'

class UserListShow extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers()
    }
    
    getUsers = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/v1/users', {
            method: 'GET',
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            }
          })
          if (response.ok) {
            const responseParsed = await response.json()
            console.log(responseParsed)
            this.setState({
              users: responseParsed.users
            })
          }
        } catch(err) {
            console.log(err)
        }
      }

    render() {
        console.log(this.props.users, 'this is props .users .users')
        const { users } = this.state
        return (
            <div className="UserShow">
                <h1>Dank Meme Users</h1>

                <ul>
                    { users.map((user, i) => <li key={i}><Link to={`/user-show/${user.id}`}>{user.username}</Link></li>) }
                </ul>

                
            </div>
        )
    }
}


export default withRouter(UserListShow)