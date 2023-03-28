import React from "react";
import "./Product.css";

function Product({ id, title, price, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
<<<<<<< HEAD

=======
        {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div> */}
>>>>>>> e40985ed37f734d28f40092be2c6d889191300e3
      </div>
      <img src={image} alt=""></img>
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
