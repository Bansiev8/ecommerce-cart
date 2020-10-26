import React, { useState, useEffect } from 'react';
import './Components.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../cartReducer'

const MyItems = (props) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state);
  const product = products.find(x => x.id === props.id);
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setQuantity(product.quantity)
  }, [product.quantity])

  const incrementQuantity = () => {
    if (quantity + 1 > product.stock) alert('Cannot order more than available stock')
    else {
      dispatch(addItem(product, quantity + 1))
      setQuantity((count) => count + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity - 1 < 1) alert('Order at least one')
    else {
      dispatch(addItem(product, quantity - 1))
      setQuantity((count) => count - 1)
    }
  }

  return (
    <div className="cart">
      <h2>Product name : {product.name}</h2>
      <button onClick={incrementQuantity}>+</button> 
      <h4>{product.quantity}</h4>
      <button onClick={decrementQuantity}>-</button>
      <h3>&#x20B9; {product.cost}</h3> 
      <button onClick={() => dispatch(deleteItem())}> Delete </button>           
    </div>
  );
}

export default MyItems;
