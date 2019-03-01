import  React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' 
import './NavBar.css'


class NavBar extends Component {    
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
    
    render(){
        return(
        <div>
            NAVBAR
        {
          this.props.currentUser
            && <Link to={`/user-show/${this.props.currentUser}`}><button>User Show</button></Link>
        }
        <Link to='/new-meme'><button type="submit">Create New Meme</button></Link>
        <Link to='/user-list-show'><button>User List Show</button></Link>
        <Link to='/meme-list-show'><button>Meme List Show</button></Link>

        </div>
        )
    }
}

export default NavBar