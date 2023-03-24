import React from "react";
import Product from "./Product";
import "./Home.css";

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
        <Product
          id="13243543"
          title="Codeverse Book"
          price={15.0}
          rating={5}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
        />
        <Product
          id="13243543"
          title="Codeverse Book"
          price={15.0}
          rating={5}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
        />
        <Product
          id="13243543"
          title="Codeverse Book"
          price={15.0}
          rating={5}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="13243543"
          title="Codeverse Book"
          price={15.0}
          rating={5}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
        />
        <Product
          id="13243543"
          title="Codeverse Book"
          price={15.0}
          rating={5}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
        />
        <Product
          id="13243543"
          title="Codeverse Book"
          price={15.0}
          rating={5}
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51QVWt8ECCL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
