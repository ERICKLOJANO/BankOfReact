// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    //console.log(this.props.accountBalance)
    return (
        <div>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;