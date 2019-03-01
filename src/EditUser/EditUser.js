import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' 
import './EditUser.css'

class EditUser extends Component {
    // camelCase JS
    state = {
        username: '',
        email: '',
        password: '',
        verify_password: ''
    }

    // componentDidMount(){
    //     console.log(this.props)
    //     this.setState({
    //         is_admin: this.props.is_admin
    //     })
    // }

    handleChange = (e) => {
        this.setState({
        ...this.state,
          [e.target.name]: e.target.value
        })
        console.log(this.state)
      }

      editUser = async (data) => {
          let newData = Object.assign(data, {is_admin: this.props.currentUser.is_admin})
          console.log(newData)
        try {
            const registerResponse = await fetch(`http://localhost:8000/api/v1/users/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(newData),
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
        const { username, email, password, verify_password } = this.state
        return (
            <div class="EditUser">
                Edit User

                <form onSubmit={this.editUserSubmit}>
                    <label>
                    Username:
                    <input type="text" name="username" onChange={this.handleChange} value={username}/>
                    </label>

                    <label>
                    Email:
                    <input type="text" name="email" onChange={this.handleChange} value={email}/>
                    </label>

                    <label>
                    Password:
                    <input type="text" name="password" onChange={this.handleChange} value={password}/>
                    </label>

                    <label>
                    Verify Password:
                    <input type="text" name="verify_password" onChange={this.handleChange} value={verify_password}/>
                    </label>


                    <button type="submit">Edit User</button>

                </form>

            </div>

        )
    }
}

export default withRouter(EditUser)