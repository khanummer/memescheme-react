import React, { Component } from 'react';
import './Auth.css';

class Auth extends Component {

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

  handleRegisterSubmit = (e) => {
    e.preventDefault()
    this.props.handleRegister(this.state)
  }

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state)


  }

  render() {
    return (
      <div className="Auth">
          <div className="Register">
            REGISTER
            <form onSubmit={this.handleRegisterSubmit}>
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

              <button type="submit">REGISTER</button>

            </form>
          </div>


          <div className="Login">
            Login
            <form onSubmit={this.handleLoginSubmit}>
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

              <button type="submit">LOGIN</button>

            </form>
          </div>

      </div>
    );
  }
}

export default Auth;