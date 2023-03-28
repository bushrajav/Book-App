import React from "react";
import { useEffect, useState } from "react";
import Product from "./Product";

function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const handleAddToCart = (product) => {
    setCheckoutItems([...checkoutItems, product]);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {checkoutItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

export default Checkout;
