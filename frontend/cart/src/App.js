import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Description from "./components/ProductDescription";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/Components/cart' component={Cart} />
            <Route
              path='/Components/productDescription'
              component={Description}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
