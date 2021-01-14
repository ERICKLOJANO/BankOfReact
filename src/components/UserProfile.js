import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <center>
            <h1>User Profile</h1>
            <div>Username: {this.props.userName}</div>
            <div>Member Since: {this.props.memberSince}</div>
            <Link to="/">Home </Link>
            <Link to = "/logIn"> Login</Link>
            <Link to="/debits"> Debits</Link>
            <Link to="/credits"> Credits</Link>
          </center>
        </div>
    );
  }
}

export default UserProfile;