import React, {useState} from 'react';
import MyItems from './MyItems';
import {useSelector, useDispatch} from 'react-redux';
import './Components.css';

const Cart = () => {

  /*const total = useSelector((state) => state.total);*/
  const items = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {
        items.map((item)=>
          <MyItems key={item.id} name={item.name} id={item.id} cost={item.cost} quantity={item.quantity}/>,
            {

            }
        )
      }
      <h2>Total = 0</h2>
      
    </div>
  );
}

export default Cart;