import React from "react";
import Nav from "./Components/nav";
import Home from "./Components/Home";
import Cart from "./Components/cart";
import Description from "./Components/productDescription";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/Components/Home' component={Home} />
          <Route path='/Components/cart' component={Cart} />
          <Route
            path='/Components/productDescription'
            component={Description}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
