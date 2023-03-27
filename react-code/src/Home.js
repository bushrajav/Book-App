import React from "react";
import Product from "./Product";
import "./Home.css";
import ProductList from "./ProductList";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://lh3.googleusercontent.com/6WyNIiJbd8H_jfH9XoS9VTqc2bS6pKWibV0N1aYn30ilKOXbJsccHBr-3IWmqSD6lcbX1U7yF7mcl-GAwbRfONlgYrkv4_fx2ZtCOY0R"
        alt=""
      ></img>

      {/* Product with name, id, title, price, image */}
      {/* FETCH API HERE TO REPLACE DETAILS */}
      <div className="home__row">
       <ProductList />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
