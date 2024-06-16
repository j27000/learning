import { useCart } from "../context/CartContext";
import "./ProductCard.css";
import { useState, useEffect } from "react";


export const ProductCard = ({ product }) => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const { name, price, image, id } = product;
  const [set, notset] = useState(false);
  useEffect(() => {
    const fin = cartList.find((current) => (current.id === id));
    if (fin) {
      notset(true);
    }
    else {
      notset(false);
    }

  }, [cartList, id])
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {set ? (<button className="remove" onClick={() => removeFromCart(product)}> Remove  </button>) : <button onClick={() => addToCart(product)}>Add To Cart</button>}
      </div>
    </div>
  )
}
