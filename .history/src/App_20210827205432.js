import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import './pages/homepage/homepage.scss';


function App() {
  return (
    <div>
      <HomePage exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
} 

export default App;
