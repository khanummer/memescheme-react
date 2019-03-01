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
        <div className="NavBar">
        {
          this.props.currentUser
            && <Link className="NavBarLink" to={`/user-show/${this.props.currentUser.id}`}>User Show</Link>
        }
        <Link className="NavBarLink" to='/new-meme'>Create New Meme</Link>
        |
        <Link className="NavBarLink" to='/user-list-show'>User List Show</Link>
        |
        <Link className="NavBarLink" to='/meme-list-show'>Meme List Show</Link>
        |
        {
            !this.props.currentUser.id
            ?  [<Link className="NavBarLink" to='/login'>Login</Link>, ' | ',
                <Link className="NavBarLink" to='/register'>Register</Link>]
            : [<span>Yo Whaddup, {this.props.currentUser.username}</span>,
                <Link className="NavBarLink" to='logout'>Logout</Link>
                ]
        }
       

        </div>
        )
    }
}

export default NavBar