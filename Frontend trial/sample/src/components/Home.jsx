import React from 'react';
import './Components.css';
import {Link} from 'react-router-dom';
import products from './productsList';

const Home = () => {
  return (
    <div>
      {products.map(product => 
        <div className="product_card" key={product.id}>
          <Link to= {`/product/${product.id}`}>
            <img src={product.images} alt=""/>
            <h3>{product.name}</h3>
            <h4>&#x20B9; {product.cost[0]}</h4>
          </Link>
          <Link to= {`/product/${product.id}`}>
            <button disabled={product.stock===0}> {product.stock? "View Product" : "Out of Stock"} </button>
          </Link>
        </div>
        )
       }
    </div>
  );

}

export default Home;
