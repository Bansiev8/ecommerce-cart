import React from 'react';
import './Components.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const itemCount = useSelector((state) => state.length);

  return(
    <nav>
      <h2>Shopping task</h2>
      <ul className="nav-links">
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/cart">Cart - {itemCount}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;