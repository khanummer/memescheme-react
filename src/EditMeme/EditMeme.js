import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' 
import './EditMeme.css'

class EditMeme extends Component {

    state = {
    image: '',
    top_text: '',
    bottom_text: '',
    votes: 0
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state)
      }

      editMeme = async (data) => {
        try {
            const registerResponse = await fetch(`http://localhost:8000/api/v1/memes/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            }
          })
          
          const registerParsed = await registerResponse.json()
          console.log(registerParsed, 'this is updated meme')
    
        } catch(err) {
          console.log(err)
        }
      }
      editMemeSubmit = async (e) => {
        e.preventDefault();
        this.editMeme(this.state)
      }


    render() {
        return (
            <div class="editmeme">
                Edit User

                <form onSubmit={this.editMemeSubmit}>
                    <label>
                    image:
                    <input type="text" name="image" onChange={this.handleChange}/>
                    </label>

                    <label>
                    top_text:
                    <input type="text" name="top_text" onChange={this.handleChange}/>
                    </label>

                    <label>
                    bottom_text:
                    <input type="text" name="bottom_text" onChange={this.handleChange}/>
                    </label>


                    <button type="submit">Edit Meme</button>

                </form>

            </div>

        )
    }
}

export default withRouter(EditMeme)