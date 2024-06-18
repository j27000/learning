import "./ProductCard.css";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [set , notset ] = useState(false);
  
  const { name, price, image } = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={() => dispatch(add(product))}>Add To Cart</button>
      </div>
    </div>
  )
}
