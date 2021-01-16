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
            <Link className = 'link' to="/">Home </Link>
            <Link className = 'link' to = "/logIn"> Login</Link>
            <Link className = 'link' to="/debits"> Debits</Link>
            <Link className = 'link' to="/credits"> Credits</Link>
          </center>
        </div>
    );
  }
}

export default UserProfile;