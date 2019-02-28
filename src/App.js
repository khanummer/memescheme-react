import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css'
import UserShow from './UserShow/UserShow'
import Splash from './Splash/Splash'
import Login from './Login/Login'
import Register from './Register/Register'
import NewMeme from './NewMeme/NewMeme'
import UserListShow from './UserListShow/UserListShow'
import MemeListShow from './MemeListShow/MemeListShow'
import MemeShow from './MemeShow/MemeShow'

class App extends Component {
  state = {
    currentUser: '',
    id: '',
    username: '',
    email: '',
    password: '',
    verify_password: '',
    is_admin: '',
    users: [],
    memes: [],
    image: '',
    top_text: '',
    bottom_text: '',
    created_by: ''
  }

  async componentDidMount(){
    this.getUsers()
    this.getMemes()
  }

  getUser = async (id) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/{id}', {
        credentials: 'include'
      })
      if (response.ok) {
        const responseParsed = await response.json()
      }
    } catch(err) {
      console.log(err)
    }
  }

  getUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users', {
        method: 'GET',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response.ok) {
        const responseParsed = await response.json()
        this.setState({
          users: responseParsed
        })
      }
    } catch(err) {
        console.log(err)
    }
  }

  getMemes = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/memes', {
        method: 'GET',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }
      })
      if(response.ok) {
        const responseParsed = await response.json()
        this.setState({
          memes: responseParsed
        })
      }
    } catch(err) {
      console.log(err)
    }
  }

  getMeme = async (id) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/memes/{id}', {
        method: 'GET',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response.ok) {
        const responseParsed = await response.json()
        console.log(responseParsed,'this is GETMEME')
        this.setState({
          image: responseParsed.image,
          top_text: responseParsed.top_text,
          bottom_text: responseParsed.bottom_text,
          created_by: responseParsed.created_by
        })
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
    this.setState({
      currentUser: parsedResponse.id,
      username: parsedResponse.username,
      email: parsedResponse.email,
      password: parsedResponse.password
    })
    

    // this.props.getUsers()
    console.log(parsedResponse, 'LOGGED IN')
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={() => <Splash />}/>
            <Route exact path={'/login'} component={() => <Login handleRegister={this.handleRegister} getUsers={this.getUsers} handleLogin={this.handleLogin}/>}/>
            <Route exact path={'/register'} component={() => <Register handleRegister={this.handleRegister} getUsers={this.getUsers} handleLogin={this.handleLogin}/>}/>
            <Route exact path={'/user-show/:id'} component={() => <UserShow username={this.state.username} email={this.state.email}/>}/>
            <Route exact path={'/new-meme'} component={() => <NewMeme created_by={this.state.currentUser}/>}/>
            <Route exact path={'/user-list-show'} component={(props) => <UserListShow {...props} users={this.state.users}/>} />
            <Route exact path={'/meme-list-show/'} component={(props) => <MemeListShow {...props} memes={this.state.memes}/>} />
            <Route exact path={'/meme-show/:id'} component={(props) => <MemeShow {...props} image={this.state.image} top_text={this.state.top_text} bottom_text={this.state.bottom_text} created_by={this.state.created_by}/>}/>
        </Switch>  
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
