import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './MemeListShow.css'

class MemeListShow extends Component {
    

    render() {
        console.log(this.props.memes.memes, 'this is props .memes .memes')
        return (
            <div className="MemeListShow">
                <h1>Dank Memes</h1>

                <ul>
                    { this.props.memes.memes.map((meme, i) => <li key={i}><Link to={`/meme-show/${meme.id}`}>{meme.image}</Link></li>) }
                </ul>

                
            </div>
        )
    }
}


export default withRouter(MemeListShow)