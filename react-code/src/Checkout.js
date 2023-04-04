import React from "react";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import "./reducer.js";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/02/Lynx/MktgAssets/MapleAssets/577-HL-LX-Maple-770x70-1._CB592592926_.jpg"
        alt=" "
      ></img>
      {basket?.length === 0 ? (
        <div>
          <h2>Shopping Basket Is Empty</h2>
          <p> You have no books in your basket. Add to basket to view books!</p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Shopping Basket</h2>
          {/* products checkout */}
          {basket?.map((book) => (
            <CheckoutProduct
              id={book.id}
              title={book.title}
              price={book.price}
              image={book.image}
            ></CheckoutProduct>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
