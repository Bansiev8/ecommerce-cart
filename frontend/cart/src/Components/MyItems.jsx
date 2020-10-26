import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AddItem, DeleteItem} from '../actions/mainActivities';
/*import {Total} from '../actions/mainActivities';*/
import './Components.css';

const MyItems = (props) => {

  /*const [total, setTotal] = useState(useSelector((state)=>state.total))*/
  const dispatch = useDispatch();
  const [quantity, setQuantity]= useState(1);
  const products = useSelector((state)=>state);
  const product = products.find(x => x.id=== props.id);

  useEffect(() =>
    {setQuantity(product.quantity)}, [product.quantity]
  )

  /*
  const sumUp= () => {
    let quan = product.quantity;
    let cst = product.cost;
    setTotal += quan*cst ;
  }*/

  const increment = () => {
    if (quantity + 1 > product.stock) alert('Exceeded stock limit')
    else {
      dispatch(AddItem(product, quantity + 1))
      setQuantity((count) => count + 1)
    }
  }

  const decrement = () => {
    if (quantity - 1 < 1) alert('Invalid Order')
    else {
      dispatch(AddItem(product, quantity - 1))
      setQuantity((count) => count - 1)
    }
  }

  return(
    <div className="cart">
      <h2>Product name : {product.name}</h2>
      <button onClick={increment}>+</button> 
      <h4>{product.quantity}</h4>
      <button onClick={decrement}>-</button>
      <h3>&#x20B9; {product.cost}</h3> 
      <button onClick={() => dispatch(DeleteItem(product.id))}> Delete </button>
    </div>
  );
}

export default MyItems;