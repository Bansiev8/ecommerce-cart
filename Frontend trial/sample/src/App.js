import React from 'react';
import './App.css';
import Nav from './components/Navbar';
import Home from './components/Home';
import Description from './components/Info';
import Cart from './components/Cart';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      
      <Nav />
      <Switch>
      <Route path="/" exact component= {Home} />
      <Route path="/cart" exact component= {Cart} />
      <Route path="/product/:id" exact component= {Description} />
      </Switch>
      </div>
      </Router>
     
    
  );
}

export default App;

