import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AccountActivty from './AccountActivity'
import AccountBalance from './AccountBalance'

class Debits extends Component {
  constructor () {
    super()
    this.state = {
      inputDebits: {
        amountDeb: 0,
        descriptionDeb: ''
      },
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

  //Handle change for description
  handleDescriptionChange = (e) => {
    const updatedDescription = {...this.state.inputDebits}
    const inputValue = e.target.value
    updatedDescription.descriptionDeb = inputValue
    console.log(inputValue);
    this.setState({inputDebits: updatedDescription})
  }

  //submit new debit to app.js and redirect back to home
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockDebits(this.state.inputDebits)
    this.props.updateDebits({
      description: this.state.inputDebits.descriptionDeb,
      amount: this.state.inputDebits.amountDeb,
      date: new Date().toDateString()
    })
    console.log(this.state.inputDebits)
    this.setState({redirect: true})
  }

  render () {

    return (
      <div>
        <center>
        <h2><AccountBalance accountBalance={this.props.accountBalance}/></h2>
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
          <Link to="/Credits"> Credits</Link> 
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