import React, {useState} from 'react';
import Products from './productsList';
import {AddItem} from '../actions/mainActivities';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './Components.css';

const Description = ({match}) => {

  const product = Products.find((p)=>p.id === match.params.id);
  const dispatch = useDispatch();
  const [quantity,setQuantity]= useState(1)

  const increment = () => {
    if (quantity+1 > product.stock) 
      {alert ("Exceeded stock limit");}
    else
      {setQuantity ((count) => count+1);}
  }

  const decrement = () => {
    if (quantity-1 < 1) 
      {alert ("Invalid Order");}
    else
      {setQuantity ((count) => count-1);}
  }

  const addToCart = () => {
    if (quantity > 0 && quantity <= product.stock)
      { dispatch(AddItem(product,quantity)) }
  }

  return (
    <div className="product_description">
      <img src={product.images} alt="" />
      <h1>{product.name}</h1>
      <h2>&#x20B9; {product.cost[0]}</h2>
      <p>{product.description}</p>
      <strong>Number of items:</strong> {quantity} <br />
      <button onClick={increment}>+</button>
      <h4>{product.num}</h4>
      <button onClick={decrement}>-</button>
      <h3>&#x20B9; {product.cost[0]}</h3>
      
      <Link to="/cart">
        <button disabled={product.stock === 0} onClick={addToCart} >
          {product.stock ? "Add to Cart" : "Out of Stock"}
        </button>
      </Link>
    </div>
  );
}

export default Description;
