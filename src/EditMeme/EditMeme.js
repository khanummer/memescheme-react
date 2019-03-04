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
            <div class="editMeme">
                Edit Meme

                <form onSubmit={this.editMemeSubmit}>
                    <label>
                    Image Url<br></br>
                    <input type="text" name="image" className="editMemeInput" onChange={this.handleChange}/>
                    </label>

                    <label>
                    Top Text<br></br>
                    <input type="text" name="top_text" className="editMemeInput" onChange={this.handleChange}/>
                    </label>

                    <label>
                    Bottom Text<br></br>
                    <input type="text" name="bottom_text" className="editMemeInput" onChange={this.handleChange}/>
                    </label>


                    <button className="editMemeButton"type="submit">Edit Meme</button>

                </form>

            </div>

        )
    }
}

export default withRouter(EditMeme)