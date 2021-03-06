import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import LogInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      //  this.setState({ currentUser: user });

       console.log(user);
     });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return ( 
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
          <Route exact path='/' component={ HomePage }/> 
          <Route path='/shop' component={ ShopPage }/> 
          <Route path='/signin' component={ LogInPage }/> 
          </Switch> 
        </div>
      );
  }
}

export default App;