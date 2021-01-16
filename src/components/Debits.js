import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

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
  handleChange = (e) => {
    const updatedAmount = {...this.state.inputDebits}
    const inputValue = e.target.value
    updatedAmount.amountDeb = Number(inputValue)
    console.log(inputValue);
    this.setState({inputDebits: updatedAmount})
  }

  //submit new debit to app.js and redirect back to home
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockDebits(this.state.inputDebits)
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
              <input type="text" name="amountDeb:" onChange={this.handleChange} value={this.state.amount} />
            </div>
            <div>
              <label htmlFor="descriptionDeb">Description: </label>
              <input type="text" name="descriptionDeb" />
            </div>
            <button>Add Debit</button>
          </form>
          <Link to="/userProfile">User Profile </Link>
          <Link to="/"> Home</Link>
          <Link to="/credits"> Credits</Link> 
          <Link to = "/logIn"> Login</Link>
        </center>
      </div>
    )
  }
}

export default Debits