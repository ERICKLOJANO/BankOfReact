import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import AccountActivty from './AccountActivity'

class Debits extends Component {
  constructor () {
    super()
    this.state = {
      inputDebits: {
        amountDeb: 10,
        descriptionDeb: ''
      },
      redirect: false
    }
  }

  //handle input field change for value
  handleValueChange = (e) => {
    const updatedAmount = {...this.state.inputDebits}
    const inputValue = e.target.value
    updatedAmount.amountDeb = Number(inputValue)
    console.log(inputValue);
    this.setState({inputDebits: updatedAmount})
  }

  handleDescriptionChange = (e) => {
    const updatedDescription = {...this.state.inputDebits}
    const inputValue = e.target.value
    updatedDescription.descriptionDeb = inputValue
    console.log(inputValue);
    this.setState({inputCredits: updatedDescription})
  }

  //submit new debit to app.js and redirect back to home
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockDebits(this.state.inputDebits)
    this.props.updateDebits({
      description: this.state.inputDebits.descriptionCred,
      amount: this.state.inputDebits.amountCred,
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
        <h1><u>Add debits</u></h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="amountDeb">Amount: </label>
              <input type="text" name="amountDeb:" onChange={this.handleValueChange} value={this.state.amount} />
            </div>
            <div>
              <label htmlFor="descriptionDeb">Description: </label>
              <input type="text" name="descriptionDeb" onChange = {this.handleDescriptionChange} />
            </div>
            <button>Add Debit</button>
          </form>
          <Link to="/userProfile">User Profile </Link>
          <Link to="/"> Home</Link>
          <Link to="/Debits"> Credits</Link> 
          <Link to = "/logIn"> Login</Link>
          {
            this.props.debits.map((obj, index) => {
              return <AccountActivty description = {obj.description} amount = {obj.amount} date = {obj.date} key = {index} />
            })
          }
        </center>
      </div>
    )
  }
}

export default Debits