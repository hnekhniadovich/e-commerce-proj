import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(async user => {
      //this.setState({ currentUser: user });
      createUserProfileDocument(user);

     //console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return ( 
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
          <Route exact path = "/" component = {HomePage} /> 
          <Route path = "/shop" component = {ShopPage} /> 
          <Route path = "/signin" component = {SignInAndSignOutPage}/> 
        </Switch> 
      </div>
    );
  }
}

export default App;
