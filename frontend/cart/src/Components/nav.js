import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>Task-3</h3>
      <ul class='nav-links'>
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/Components/productDescription'>
          <li>Product Details</li>
        </Link>
        <Link style={navStyle} to='/Components/cart'>
          <li className='cart'>
            <ion-icon name='cart-outline'></ion-icon>Cart<span>(0)</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
