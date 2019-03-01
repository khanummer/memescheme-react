import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './UserListShow.css'

class UserListShow extends Component {
    

    render() {
        console.log(this.props.users, 'this is props .users .users')
        return (
            <div className="UserShow">
                <h1>Dank Meme Users</h1>

                <ul>
                    { this.props.users.map((user, i) => <li key={i}><Link to={`/user-show/${user.id}`}>{user.username}</Link></li>) }
                </ul>

                
            </div>
        )
    }
}


export default withRouter(UserListShow)