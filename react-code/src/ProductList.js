import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="productList">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;