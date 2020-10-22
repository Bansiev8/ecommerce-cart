import React from "react";
import "../App.css";
import MacBook from "../images/MacBook.jpg";
import headphones from "../images/headphones.jpg";
import sneakers from "../images/sneakers.jpg";
import redmi from "../images/redmi9.png";
import potato from "../images/potato.JPG";

const Home = () => {
  return (
    <div className='container'>
      <div className='image'>
        <img src={MacBook} width='200' height='200' alt='MacBook' />
        <h3>Apple MacBook Pro</h3>
        <a className='addToCart cart1' href='#'>
          Add to cart
        </a>
      </div>

      <div className='image'>
        <img src={headphones} width='200' height='200' alt='Headphones' />
        <h3>Cosmic Byte GS410 Headphones</h3>
        <a className='addToCart cart2' href='#'>
          Add to cart
        </a>
      </div>

      <div className='image'>
        <img src={sneakers} width='200' height='200' alt='Sneakers' />
        <h3>Woodland Men's Sneakers</h3>
        <a className='addToCart cart3' href='#'>
          Add to cart
        </a>
      </div>

      <div className='image'>
        <img src={redmi} width='200' height='200' alt='Redmi 9' />
        <h3>Redmi 9</h3>
        <a className='addToCart cart4' href='#'>
          Add to cart
        </a>
      </div>

      <div className='image'>
        <img src={potato} width='200' height='200' alt='Potato' />
        <h3>Fresh Organic Potato</h3>
        <a className='addToCart cart5' href='#'>
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Home;
