import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import LogInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.jsx';


function App() {
    return ( 
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={ HomePage }/> 
        <Route path='/shop' component={ ShopPage }/> 
        <Route path='/signin' component={ LogInPage }/> 
        </Switch> 
      </div>
    );
}

export default App;