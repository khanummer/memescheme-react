import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
