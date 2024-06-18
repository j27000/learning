import "./ProductCard.css";
import { useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
export const ProductCard = ({ product }) => {
  const { name, price, image, id } = product;
  const dispatch = useDispatch();
  const [set, notset] = useState(false);
  const found = useSelector((state) => state.cartState.cartList);
  useEffect(() => {
    const pro = found.find((current) => (current.id === id));

    if (pro) {
      notset(true);
    }
    else {
      notset(false);
    }

  }, [found, id])


  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          set ? (<button className="Remove" onClick={() => dispatch(remove(product))}>Remove</button >) : (<button onClick={() => dispatch(add(product))}>Add To Cart</button >)
        }

      </div>
    </div>
  )
}
