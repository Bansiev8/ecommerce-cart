import React from 'react';
import './Components.css';
import {useDispatch, useSelector} from 'react-redux';
import {DelActivity} from '../activities/DeleteActivity';
import {increment , decrement} from '../activities/CounterActivity';


const MyItems = (props) => {
  const products = useSelector(state => state.activities);
  const product = products.find(x => x.id === props.id);
  const dispatch= useDispatch();
  return (
    <div className="cart">
      <ul>
        <li>
          <h2>Product name : {product.name}</h2>
          <button onClick={()=>dispatch(increment({id:product.id}))}>+</button> 
          <h4>{product.num}</h4>
          <button onClick={()=>dispatch(decrement({id:product.id}))}>-</button>
          <h3>&#x20B9; {product.cost}</h3> 
          <button onClick={()=>dispatch(DelActivity({id:product.id}))}> Delete </button>      
        </li>
      </ul>
      
    </div>
  );
}

export default MyItems;
