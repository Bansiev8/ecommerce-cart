import React from 'react';
import './Components.css';
import MyItems from './MyItems';
import {useSelector} from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state) //this brings the whole global state with key named activities
  return (
    <div className="cart">
      {items.map((item) => 
        <MyItems key={item.id} name={item.name} id={item.id} />
      )}
      <h1>Total :</h1>
    </div>
  );
}

export default Cart;
