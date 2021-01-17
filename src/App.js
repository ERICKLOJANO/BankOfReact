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
        accountBalance: 20,
        des: '',
        debits: [],
        credits: [],
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    };
  }

  //fetch debits and credits data to display
  componentDidMount = () => {
    fetch('https://moj-api.herokuapp.com/debits')
    .then((results) => {
      return results.json()
    })
    .then((response) => {
      let loadCredits = response
      this.setState({debits: loadCredits})
    })
    .catch((error) => console.log(error))
    fetch('https://moj-api.herokuapp.com/credits')
    .then((results) => {
      return results.json()
    })
    .then((response) => {
      let loadCredits = response
      this.setState({credits: loadCredits})
    })
    .catch((error) => console.log(error))
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  //used to update account balance from child component (debits/credits)
  mockDebits = (debitsInfo) => {
    let newAmount = this.state.accountBalance
    newAmount -= debitsInfo.amountDeb;
    newAmount = Math.round(newAmount * 100) / 100
    this.setState({accountBalance: newAmount})
  }

  mockCredits = (creditsInfo) => {
    let newAmount = this.state.accountBalance
    newAmount += creditsInfo.amountCred;
    this.setState({accountBalance: newAmount})
  }

  //update list of credits/debits from child component
  updateCredits = (newCredit) => {
    let newCredits = this.state.credits
    newCredits = [...newCredits, newCredit]
    this.setState({credits: newCredits})

  }

  updateDebits = (newDebit) => {
    let newDebits = this.state.debits
    newDebits = [...newDebits, newDebit]
    this.setState({debits: newDebits})

  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const DebitsComponent = () => (<Debits mockDebits={this.mockDebits} accountBalance={this.state.accountBalance} debits = {this.state.debits} updateDebits = {this.updateDebits} />);
    const CreditsComponent = () => (<Credits mockCredits={this.mockCredits} accountBalance={this.state.accountBalance} credits = {this.state.credits} updateCredits = {this.updateCredits} />);

    return (
        <Router basename = {process.env.PUBLIC_URL}>
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
