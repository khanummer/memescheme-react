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

    deleteMeme = async (e) => {
        console.log(e, 'THIS IS E')
        e.preventDefault();
        try {
            const deletedResponse = await fetch(`http://localhost:8000/api/v1/memes/${this.props.match.params.id}` ,{
                method: 'DELETE',
                body: JSON.stringify(this.state.meme),
                credentials: 'include',
                headers: {
                "Content-Type": "application/json"
                }
            })
            
            const deletedParsed = await deletedResponse.json()
            console.log(deletedParsed, 'deleted meme')
 
        
        } catch(err) {
            console.log(err)
        }
    }
    


    render() {
        console.log(this.props, ' thiss is props from memeshowpage')
        console.log(this.state, 'this is state from memeshow')
        return (
            <div className="MemeShow">
                {this.state.meme.map(u => 
                <div>
                    <h1>{u.image}</h1>
                    <button onClick={(e) => this.deleteMeme(e)}>Delete Meme</button>
                    <Link to={`/edit-meme/${this.props.match.params.id}`}><button>Edit Meme</button></Link>
                </div>
                )}
            </div>
        )
    }
}


export default withRouter(MemeShow)