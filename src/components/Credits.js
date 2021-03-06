import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AccountActivty from './AccountActivity'
import AccountBalance from './AccountBalance'

class Credits extends Component {
  constructor () {
    super()
    this.state = {
      inputCredits: {
        amountCred: 0,
        descriptionCred: ''
      },
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

  //handle change for description
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
      description: this.state.inputCredits.descriptionCred,
      amount: this.state.inputCredits.amountCred,
      date: new Date().toDateString()
    })
    this.setState({redirect: true})
  }

  render () {

    return (
      <div>
        <center>
        <h2><AccountBalance accountBalance={this.props.accountBalance}/></h2>
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
          <Link className = 'link' to="/userProfile">User Profile </Link>
          <Link className = 'link' to="/"> Home</Link>
          <Link className = 'link' to="/debits"> Debits</Link>
          <Link className = 'link' to = "/logIn"> Login</Link>
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