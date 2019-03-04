import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './NewMeme.css';

class NewMeme extends Component {

  state = {
    image: '',
    top_text: '',
    bottom_text: '',
    votes: 0,
    created_at: '',
    created_by: 0
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
        created_by: this.props.created_by
    })
  }

  handleNewMeme = async (data) => {
      const newMemeResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/memes`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(data, this.state.created_by),
          headers: {
              'Content-Type': 'application/json'
            }
        })
        const newMemeParsed = await newMemeResponse.json()
        console.log(newMemeParsed)
    }
    handleNewMemeSubmit = async (e) => {
        e.preventDefault();

        this.handleNewMeme(this.state)
  }


  render() {
    return (
        <div className="newMeme">
        Create New Meme
        <form onSubmit={this.handleNewMemeSubmit}>
            <label>
            Image<br></br>
            <input type="text" name="image" className="newMemeInput" onChange={this.handleChange}/>
            </label>

            <label>
            Top Text<br></br>
            <input type="text" name="top_text" className="newMemeInput" onChange={this.handleChange}/>
            </label>

            <label>
            Bottom Text<br></br>
            <input type="text" name="bottom_text" className="newMemeInput" onChange={this.handleChange}/>
            </label>


            <button type="submit">Create Meme</button>

        </form>
        </div>
    );
  }
}

export default withRouter(NewMeme)