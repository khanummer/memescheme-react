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
      const newMemeResponse = await fetch('http://localhost:8000/api/v1/memes', {
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
        <div className="NewMeme">
        Register
        <form onSubmit={this.handleNewMemeSubmit}>
            <label>
            Image:
            <input type="text" name="image" onChange={this.handleChange}/>
            </label>

            <label>
            Top text:
            <input type="text" name="top_text" onChange={this.handleChange}/>
            </label>

            <label>
            Bottom text:
            <input type="text" name="bottom_text" onChange={this.handleChange}/>
            </label>


            <button type="submit">Create Meme</button>

        </form>
        </div>
    );
  }
}

export default withRouter(NewMeme)