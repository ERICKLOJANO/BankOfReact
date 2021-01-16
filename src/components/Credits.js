import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import AccountActivty from './AccountActivity'

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
  handleValueChange = (e) => {
    const updatedCredAmount = {...this.state.inputCredits}
    const inputValue = e.target.value
    updatedCredAmount.amountCred = Number(inputValue)
    console.log(inputValue);
    this.setState({inputCredits: updatedCredAmount})
  }
  handleDescriptionChange = (e) => {
    const updatedDescription = {...this.state.inputCredits}
    const inputValue = e.target.value
    updatedDescription.descriptionCred = inputValue
    console.log(inputValue);
    this.setState({inputCredits: updatedDescription})
  }

  //submit new debit to app.js and redirect back to home
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockCredits(this.state.inputCredits)
    this.props.updateCredits({
      description: this.state.descriptionCred,
      amount: this.state.amountCred,
      date: new Date().toDateString()
    })
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
              <input type="text" name="amount:" onChange={this.handleValueChange} value={this.state.amountCred} />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <input type="text" name="description" onChange = {this.handleDescriptionChange} />
            </div>
            <button>Add Credit</button>
          </form>
          <Link to="/userProfile">User Profile </Link>
          <Link to="/"> Home</Link>
          <Link to="/debits"> Debits</Link>
          <Link to = "/logIn"> Login</Link>
          {
            this.props.credits.map((obj, index) => {
              return <AccountActivty description = {obj.description} amount = {obj.amount} date = {obj.date} key = {index} />
            })
          }
          
        </center>
      </div>
    )
  }
}

export default Credits