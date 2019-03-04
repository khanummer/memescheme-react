import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './MemeListShow.css'

class MemeListShow extends Component {



    render() {
        console.log(this.props.memes, 'this is props .memes .memes')
        return (
            <div className="MemeListShow">
                <h1>Dank Memes</h1>
                <ul>
                    { this.props.memes.map((meme, i) =>                     
                        <div className="MemeItem">
                            <li key={i}>
                                <Link to={`/meme-show/${meme.id}`}>
                                    <div className="memeshow-top-text-list">{meme.top_text}</div>
                                    <img src={`${meme.image}`}/>
                                    <div className="memeshow-bottom-text-list">{meme.bottom_text}</div>
                                </Link>
                            </li>
                        </div>
                    ) }
                </ul>  
            </div>
        )
    }
}


export default withRouter(MemeListShow)