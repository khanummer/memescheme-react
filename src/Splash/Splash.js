import React from 'react'
import { Link, withRouter } from 'react-router-dom' 
import './Splash.css'

const Splash = () => {
    return (
        <div className="splash">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default withRouter(Splash)