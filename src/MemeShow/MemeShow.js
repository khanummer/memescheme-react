import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './MemeShow.css'

class MemeShow extends Component {
    

    render() {
        console.log(this.props)
        return (
            <div className="MemeShow">
                <h1>{this.props.image}</h1>
            </div>
        )
    }
}


export default withRouter(MemeShow)