import React, { useState } from "react";
import "./Components.css";
import products from "./productsList";
import { addItem } from '../cartReducer';
import { useDispatch } from "react-redux";

const Info = ({ match }) => {
  const [quantity, setQuantity] = useState(1)
  const product = products.find((p) => p.id === match.params.id);
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    if (quantity + 1 > product.stock) alert('Cannot order more than available stock')
    else setQuantity((count) => count + 1)
  }

  const decrementQuantity = () => {
    if (quantity - 1 < 1) alert('Order at least one')
    else setQuantity((count) => count - 1)
  }

  const addToCart = () => {
    if (quantity > 0 && quantity <= product.stock) dispatch(addItem(product, quantity))
  }

  return (
    <div className="product_description">
      <img src={product.images} alt="" />
      <h1>{product.name}</h1>
      <h2>&#x20B9; {product.cost[0]}</h2>
      <p>{product.description}</p>
      <strong>Number of items:</strong> {quantity} <br />
      <button onClick={incrementQuantity}>+</button>
      <h4>{product.num}</h4>
      <button onClick={decrementQuantity}>-</button>
      <h3>&#x20B9; {product.cost[0]}</h3>
      <button onClick={addToCart} disabled={product.stock === 0}>
        {product.stock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default Info;
