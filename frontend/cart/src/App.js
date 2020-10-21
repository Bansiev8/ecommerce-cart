import React from 'react';
import Nav from './Components/nav';
import Cart from './Components/cart';
import Description from './Components/productDescription';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Components/cart" component={Cart} />
          <Route path="/Components/productDescription" component={Description} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Products here</h1>
    </div>
  );
}

export default App;
