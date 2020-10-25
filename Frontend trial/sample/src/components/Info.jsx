import React from 'react';
import './Components.css';
import products from './productsList';
import MyItems from './MyItems';
import {useDispatch} from 'react-redux';
import {AddActivity} from '../activities/AddActivity';
import {increment , decrement} from '../activities/CounterActivity';
import {Link} from 'react-router-dom';



const Info = ({ match }) => {
  
  const product = products.find(p => p.id === match.params.id)
  const dispatch= useDispatch();

  const AddProduct = () => {
    <div> 
    <MyItems name={product.name} id={product.id} />
    {dispatch(AddActivity({id: product.id, name: product.name, num: product.num, cost: product.cost[0]}))}
    </div>
    
    }

      return(
        <div className="product_description">
          <img src={product.images} alt=""/>
          <h1>{product.name}</h1>
          <h2>&#x20B9; {product.cost[0]}</h2>
          <p>{product.description}</p>
            Number of items  :
          <button onClick={()=>dispatch(increment({id:product.id}))}>+</button> 
          <h4>{product.num}</h4>
          <button onClick={()=>dispatch(decrement({id:product.id}))}>-</button>
          <h3>&#x20B9; {product.cost}</h3>
          <Link to= "/cart">
            <button onClick={AddProduct()} disabled={product.stock===0}>{product.stock? "Add to Cart" : "Out of Stock"}</button>
          </Link>
      </div>    
   );
}

export default Info;
