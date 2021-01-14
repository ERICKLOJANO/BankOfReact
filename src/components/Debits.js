import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

class Debits extends Component {
  constructor () {
    super()
    this.state = {
      inputCredits: {
        amount: 0,
        description: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedAmount = {...this.state.inputCredits}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedAmount[inputField] = inputValue

    this.setState({inputCredits: (this.state.amount - updatedAmount)})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockDebits(this.state.inputCredits)
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
              <label htmlFor="amount">Amount: </label>
              <input type="text" name="amount:" onChange={this.handleChange} value={this.state.amount} />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <input type="text" name="description" />
            </div>
            <button>Add Debit</button>
          </form>
          <Link to="/userProfile">User Profile </Link>
          <Link to="/"> Home</Link>
          <Link to="/debits"> Debits</Link>  
        </center>
      </div>
    )
  }
}

export default Debits