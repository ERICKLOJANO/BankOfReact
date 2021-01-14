import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

class Credits extends Component {
  constructor () {
    super()
    this.state = {
      inputCredits: {
        amountCred: 10,
        descriptionCred: ''
      },
      redirect: false
    }
  }

  //handle input field change for value
  handleChange = (e) => {
    const updatedCredAmount = {...this.state.inputCredits}
    const inputValue = e.target.value
    updatedCredAmount.amountCred = Number(inputValue)
    console.log(inputValue);
    this.setState({inputCredits: updatedCredAmount})
  }

  //submit new debit to app.js and redirect back to home
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockCredits(this.state.inputCredits)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/"/>)
    }

    return (
      <div>
        <center>
        <h1><u>Add credits</u></h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="amount">Amount: </label>
              <input type="text" name="amount:" onChange={this.handleChange} value={this.state.amountCred} />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <input type="text" name="description" />
            </div>
            <button>Add Credit</button>
          </form>
          <Link to="/userProfile">User Profile </Link>
          <Link to="/"> Home</Link>
          <Link to="/debits"> Debits</Link>
          <Link to = "/logIn"> Login</Link>
        </center>
      </div>
    )
  }
}

export default Credits