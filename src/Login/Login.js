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
    return (
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

            <button type="submit">LOGIN</button>

        </form>
        <Link to='/UserShow'><button>User Show</button></Link>
        <Link to='/NewMeme'><button type="submit">Create New Meme</button></Link>
        </div>
    );
  }
}

export default withRouter(Login);