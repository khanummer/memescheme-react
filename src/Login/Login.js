import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './Login.css';

class Login extends Component {

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

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state)
  }

  render() {
    console.log(this.props)
    return (
        <div className="Login">
          <div id="LoginHeader">
            <h1>Login</h1>
          </div>
          <form onSubmit={this.handleLoginSubmit}>
              <label>
              Username:
              </label>
              <input type="text" name="username" onChange={this.handleChange}/>

              <label>
              Email:
              </label>
              <input type="text" name="email" onChange={this.handleChange}/>

              <label>
              Password:
              </label>
              <input type="text" name="password" onChange={this.handleChange}/>

              <button type="submit" className="LoginButton">LOGIN</button>
          </form>
        </div>
    );
  }
}

export default withRouter(Login);