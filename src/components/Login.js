import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <center>
        <h1><u>Login</u></h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="userName">Username: </label>
              <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" />
            </div>
            <button>Log In</button>
          </form>
          <Link className = 'link' to="/userProfile">User Profile </Link>
          <Link className = 'link' to="/"> Home</Link>
          <Link className = 'link' to="/debits"> Debits</Link>
          <Link className = 'link' to="/credits"> Credits</Link> 
        </center>
      </div>
    )
  }
}

export default LogIn