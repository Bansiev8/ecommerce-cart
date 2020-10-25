import React from 'react';
import './Components.css';
import { useSelector } from 'react-redux';

const MyItems = (props) => {
  const products = useSelector(state => state);
  const product = products.find(x => x.id === props.id);

  return (
    <div className="cart">
      <h2>Product name : {product.name}</h2>
      <button>+</button> 
      <h4>{product.num}</h4>
      <button>-</button>
      <h3>&#x20B9; {product.cost}</h3> 
      <button> Delete </button>           
    </div>
  );
}

export default MyItems;
