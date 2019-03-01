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
            && <Link to={`/user-show/${this.props.currentUser.id}`}>User Show</Link>
        }
        <Link to='/new-meme'>Create New Meme |</Link>
        <Link to='/user-list-show'>User List Show |</Link>
        <Link to='/meme-list-show'>Meme List Show |</Link>
        {
            !this.props.currentUser.id
            ?  [<Link to='/login'>Login |</Link>,
                <Link to='/register'>Register |</Link>]
            : [<span>{this.props.currentUser.username} hello</span>,
                <Link to='logout'>Logout</Link>
                ]
        }
       

        </div>
        )
    }
}

export default NavBar