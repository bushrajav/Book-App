import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, image }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(id, title, price, image);

  const removeFromBasket = () => {
    //remove from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""></img>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={removeFromBasket}> Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
