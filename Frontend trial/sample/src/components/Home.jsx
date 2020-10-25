import React from 'react';
import './Components.css';
import {Link} from 'react-router-dom';
import products from './productsList';
import {useDispatch} from 'react-redux';
import {AddActivity} from '../activities/AddActivity';

const Home = () => {
  
  const dispatch = useDispatch();

  return (
    <div>
      {products.map(product => {
        return(
          <div className="product_card">
            <Link to= {`/product/${product.id}`}>
            <img src={product.images} alt=""/>
            <h3>{product.name}</h3>
            <h4>&#x20B9; {product.cost[0]}</h4>
            </Link>
            <Link to= "/cart">
            <button disabled={product.stock===0} onClick={()=> dispatch(AddActivity({id: product.id, name: product.name, num: product.num, cost: product.cost[0]}))}> {product.stock? "Add to Cart" : "Out of Stock"} </button>
            </Link>
          </div>)
        })
       }
       </div>
  );

}

export default Home;
