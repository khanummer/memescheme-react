import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' 
import './EditUser.css'

class EditUser extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        verify_password: '',
        is_admin: 'False'
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state)
      }

      editUser = async (data) => {
        try {
            const registerResponse = await fetch(`http://localhost:8000/api/v1/users/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            }
          })
          
          const registerParsed = await registerResponse.json()
          console.log(registerParsed, 'this is updated user')
    
        } catch(err) {
          console.log(err)
        }
      }
      editUserSubmit = async (e) => {
        e.preventDefault();
        this.editUser(this.state)
      }


    render() {
        return (
            <div class="EditUser">
                Edit User

                <form onSubmit={this.editUserSubmit}>
                    <label>
                    Username:
                    <input type="text" name="username" onChange={this.handleChange}/>
                    </label>

                    <label>
                    Email:
                    <input type="text" name="email" onChange={this.handleChange}/>
                    </label>

                    <label>
                    Password:
                    <input type="text" name="password" onChange={this.handleChange}/>
                    </label>

                    <label>
                    Verify Password:
                    <input type="text" name="verify_password" onChange={this.handleChange}/>
                    </label>


                    <button type="submit">Edit User</button>

                </form>

            </div>

        )
    }
}

export default withRouter(EditUser)