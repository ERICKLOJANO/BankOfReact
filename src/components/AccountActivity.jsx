import React from 'react'

class AccountActivity extends React.Component {

    render() {
        return (
            <div className = 'display'>
                <h3>{this.props.description}</h3>
                <p>Amount: {this.props.amount}</p>
                <p>Date: {this.props.date}</p>
            </div>
        )
    }
}

export default AccountActivity