import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import './pages/homepage/homepage.scss';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <HomePage exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
