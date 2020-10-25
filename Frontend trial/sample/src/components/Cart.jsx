import React from 'react';
import './Components.css';
import MyItems from './MyItems';
import {useSelector} from 'react-redux';

const Cart = () => {
  const allActivities = useSelector((state) => state.activities) //this brings the whole global state with key named activities
  return (
    <div className="cart">
      {allActivities.map(activity => {
        return(<MyItems key={activity.id} name={activity.name} id={activity.id}/>)
      })}
      <h1>Total :</h1>
    </div>
  );
}

export default Cart;
