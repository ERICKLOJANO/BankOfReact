import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <center>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>
            <h2><AccountBalance accountBalance={this.props.accountBalance}/></h2>
            <Link className = 'link' to="/userProfile">User Profile </Link>
            <Link className = 'link' to="/logIn"> Login</Link>
            <Link className = 'link' to="/debits"> Debits</Link>
            <Link className = 'link' to="/credits"> Credits</Link>
          </center>
        </div>
    );
  }
}

export default Home;
