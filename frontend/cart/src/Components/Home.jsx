import React from 'react';
import Products from './productsList';
import { useDispatch } from 'react-redux';
import {AddItem} from '../actions/mainActivities';
import {Link} from 'react-router-dom';
import './Components.css';

const Home = () => {
  const quantity = 1;
  const dispatch = useDispatch();

  return(
    <div>
    {
      Products.map(product =>
          <div key={product.id}>
            <div className="product_card">
              <Link to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
                <h4>&#x20B9; {product.cost[0]}</h4>
              </Link>
              <Link to="/cart">
                <button disabled={product.stock===0} onClick={dispatch(AddItem(product, quantity))}> {product.stock? "Add to Cart" : "Out of Stock"} </button>
              </Link>
            </div>
          </div>
        )
    }
    </div>
  );
}

export default Home;