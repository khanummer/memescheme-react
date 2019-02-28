import React from 'react'
import { Link, withRouter } from 'react-router-dom' 
import './Splash.css'

const Splash = () => {
    return (
        <div>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
        </div>
    )
}

export default withRouter(Splash)