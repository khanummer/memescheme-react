import React from 'react'
import { Link, withRouter } from 'react-router-dom' 
import './Splash.css'

const Splash = () => {
    return (
        <div className="splash">
            welcome 2 m3m3schem3 \(^.^)/
            <div className="splash-description">(a parody meme generator, this whole website is a joke)</div>
            <Link className="splash-login" to="/login">login</Link>
            <Link className="splash-register" to="/register">register</Link>
            
        </div>
    )
}

export default withRouter(Splash)