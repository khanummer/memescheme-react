import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './UserShow.css'

class UserShow extends Component {
    

    render() {
        return (
            <div className="UserShow">
                <h1>{this.props.username}</h1>
            </div>
        )
    }
}


export default withRouter(UserShow)