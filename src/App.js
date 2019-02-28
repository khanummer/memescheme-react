import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';
import Auth from './Auth/Auth'
import UserShow from './UserShow/UserShow'
import Splash from './Splash/Splash'
import Login from './Login/Login'
import Register from './Register/Register'

class App extends Component {
  state = {
    id: '',
    username: '',
    email: '',
    password: '',
    verify_password: '',
    is_admin: '',
  }

  async componentDidMount(){
    this.getUsers()
  }

  getUser = async (id) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/{id}', {
        credentials: 'include'
      })
      if (response.ok) {
        const responseParsed = await response.json()
        console.log(responseParsed)
      }
    } catch(err) {
      console.log(err)
    }
  }

  getUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users', {
        credentials: 'include'
      })
      if (response.ok) {
        const responseParsed = await response.json()
        console.log(responseParsed)
      }
    } catch(err) {
        console.log(err)
    }
  }

  handleRegister = async (data) => {
    try {
      const registerResponse = await fetch("http://localhost:8000/api/v1/users", {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }
      })
      
      const registerParsed = await registerResponse.json()
      console.log(registerParsed)
      this.getUsers()

    } catch(err) {
      console.log(err)
    }
  }
  handleLogin = async (data) => {
    const loginResponse = await fetch('http://localhost:8000/api/v1/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const parsedResponse = await loginResponse.json();

    // this.props.getUsers()
    console.log(parsedResponse, 'LOGGED IN')
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={() => <Splash />}/>
            <Route exact path={'/Login'} component={() => <Login handleRegister={this.handleRegister} getUsers={this.getUsers} handleLogin={this.handleLogin}/>}/>
            <Route exact path={'/Register'} component={() => <Register handleRegister={this.handleRegister} getUsers={this.getUsers} handleLogin={this.handleLogin}/>}/>
            <Route exact path={'/UserShow'} component={() => <UserShow />}/>
            <Auth handleRegister={this.handleRegister} getUsers={this.getUsers} handleLogin={this.handleLogin}/>
          
        </Switch>  
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
