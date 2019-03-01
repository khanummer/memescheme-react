import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './MemeShow.css'

class MemeShow extends Component {
    state = {
        meme: []
    }

    componentDidMount() {
        this.setState({
            meme: (this.props.memes).filter(u => u.id == this.props.match.params.id)
        })
    }

    render() {
        console.log(this.props, ' thiss is props from memeshowpage')
        console.log(this.state, 'this is state from memeshow')
        return (
            <div className="MemeShow">
                {this.state.meme.map(u => 
                    <h1>{u.image}</h1>
                )}
            </div>
        )
    }
}


export default withRouter(MemeShow)