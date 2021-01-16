import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      account: {
        accountBalance: 20,
        des: '',
      }, 
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    };
  }


  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  //used to update account balance from child component (debits/credits)
  mockDebits = (debitsInfo) => {
    const newAmount = {...this.state.account}
    newAmount.accountBalance -= debitsInfo.amountDeb;
    this.setState({account: newAmount})
  }  

  mockCredits = (creditsInfo) => {
    const newVal = {...this.state.account}
    newVal.accountBalance += creditsInfo.amountCred;
    this.setState({account: newVal})
  }  

  render() {
    
    const HomeComponent = () => (<Home accountBalance={this.state.account.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const DebitsComponent = () => (<Debits mockDebits={this.mockDebits}/>);
    const CreditsComponent = () => (<Credits mockCredits={this.mockCredits}/>);

    return (
        <Router>
          <div className="App">
           <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
          </Switch>
          </div>
        </Router>
    );
  }
}

export default App;