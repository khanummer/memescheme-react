import React, { Component } from 'react'
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import './App.css'
import UserShow from './UserShow/UserShow'
import Splash from './Splash/Splash'
import Login from './Login/Login'
import Register from './Register/Register'
import NewMeme from './NewMeme/NewMeme'
import UserListShow from './UserListShow/UserListShow'
import MemeListShow from './MemeListShow/MemeListShow'
import MemeShow from './MemeShow/MemeShow'
import EditUser from './EditUser/EditUser'
import EditMeme from './EditMeme/EditMeme'
import NavBar from './NavBar/NavBar'


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
    // this.getUsers()
    this.getMemes()
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
        console.log(responseParsed)
        this.setState({
          users: responseParsed.users
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
        console.log(responseParsed, 'THIS IS RESPONSE PARSED')
        this.setState({
          memes: responseParsed.memes
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
      this.setState({
        currentUser: registerParsed
      })
      this.props.history.push(`/user-show/${registerParsed.id}`)

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
    this.getUsers()
    console.log('this is the currrent user',parsedResponse)
    this.setState({
      currentUser: parsedResponse
    })
    this.props.history.push(`/user-show/${parsedResponse.id}`)
    // this.setState({
    //   currentUser: parsedResponse.id,
    //   username: parsedResponse.username,
    //   email: parsedResponse.email,
    //   is_admin: parsedResponse.is_admin
    //   // password: parsedResponse.password
    // })
    

    // this.props.getUsers()
    // console.log(parsedResponse, 'LOGGED IN')
  }

  
  render() {
    // console.log(this.state.memes,'THIS IS MEMES IN APP.JS')
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path={'/'} component={() => <Splash />}/>
            <Route exact path={'/login'} component={() => <Login handleRegister={this.handleRegister} getUsers={this.getUsers} handleLogin={this.handleLogin} currentUser={this.state.currentUser}/>}/>
            <Route exact path={'/register'} component={() => <Register handleRegister={this.handleRegister} getUsers={this.getUsers} handleLogin={this.handleLogin}/>}/>
            <Route exact path={'/user-show/:id'} component={() => <UserShow getUsers={this.getUsers} users={this.state.users} email={this.state.email} currentUser={this.state.currentUser}/>}/>
            <Route exact path={'/new-meme'} component={() => <NewMeme created_by={this.state.currentUser.id}/>}/>
            <Route exact path={'/user-list-show'} component={(props) => <UserListShow {...props} users={this.state.users} />} />
            <Route exact path={'/meme-list-show/'} component={(props) => <MemeListShow {...props} memes={this.state.memes} getMeme={this.getMeme}/>} />
            <Route exact path={'/meme-show/:id'} component={(props) => <MemeShow {...props} memes={this.state.memes}/>}/>
            <Route exact path={'/edit-user/:id'} component={(props) => <EditUser {...props} currentUser={this.state.currentUser} is_admin={this.state.is_admin}/>}/>
            <Route exact path={'/edit-meme/:id'} component={EditMeme}/>
        </Switch>  
        
      </div>
    );
  }
}

export default withRouter(App);
