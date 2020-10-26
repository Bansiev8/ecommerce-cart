import React from "react";
import "./App.css";
import Navbar from "./Components/Nav";
import Home from "./Components/Home";
import Info from "./Components/Description";
import Cart from "./Components/Cart.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product/:id" exact component={Info} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;