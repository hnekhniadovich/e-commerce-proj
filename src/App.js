import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user });
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          //, () => console.log(this.state)
        }); 
      }

     setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return ( 
      <div>
        <Header/>
          <Switch>
          <Route exact path = "/" component = {HomePage} /> 
          <Route path = "/shop" component = {ShopPage} /> 
          <Route path = "/signin" component = {SignInAndSignOutPage}/> 
        </Switch> 
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
