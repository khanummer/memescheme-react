import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './Register.css';

class Register extends Component {

  state = {
    id: '',
    username: '',
    email: '',
    password: '',
    verify_password: '',
    is_admin: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegisterSubmit = async (e) => {
    e.preventDefault();
    this.props.handleRegister(this.state)
  }

  render() {
    return (
        <div className="Register">
          <div id="RegisterHeader">
            <h1>Register</h1>
          </div>
          <div>
            <form onSubmit={this.handleRegisterSubmit}>
              <label>
              Username:
              </label>
              <input type="text" name="username" className="RegisterInput" onChange={this.handleChange}/>

              <label>
              Email:
              </label>
              <input type="text" name="email" className="RegisterInput" onChange={this.handleChange}/>

              <label>
              Password:
              </label>
              <input type="text" name="password" className="RegisterInput" onChange={this.handleChange}/>

              <label>
              Verify Password:
              </label>
              <input type="text" name="verify_password" className="RegisterInput" onChange={this.handleChange}/>
              <button type="submit" className="RegisterButton">REGISTER</button>
            </form>
          </div>
        </div>
    );
  }
}

export default withRouter(Register);