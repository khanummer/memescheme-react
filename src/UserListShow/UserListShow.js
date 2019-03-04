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
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
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
            <div className="UserListShow">
                <div className="UserListShow-title">Users</div>

                <ul>
                    { users.map((user, i) => <li className="UserListShow-users" key={i}><Link className="UserListShow-users" to={`/user-show/${user.id}`}>{user.username}</Link></li>) }
                </ul>

                
            </div>
        )
    }
}


export default withRouter(UserListShow)