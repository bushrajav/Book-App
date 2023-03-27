import React from "react";
import Product from "./Product";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [showBooks, setshowBooks] = useState();
  const apiUrl = "http://localhost:8080/books";
  let displayData;
  function pullJSON() {
    fetch(apiUrl).then((response) =>
      response.json().then((responseData) => {
        displayData = responseData.map(function (book) {
          // return <p key={book.id}>{book.title}</p>;
          return (
            <Product
              key={book.id}
              title={book.title}
              price={book.price}
              image={book.image}
            ></Product>
          );
        });
        console.log(responseData);
        setshowBooks(displayData);
      })
    );
    // return;
  }

  useEffect(() => {
    pullJSON();
  }, []);

  // search filter

  return (
    <div className="home">
      <p className="main__text">main page</p>
      <img
        className="home__image"
        src="https://lh3.googleusercontent.com/6WyNIiJbd8H_jfH9XoS9VTqc2bS6pKWibV0N1aYn30ilKOXbJsccHBr-3IWmqSD6lcbX1U7yF7mcl-GAwbRfONlgYrkv4_fx2ZtCOY0R"
        alt=""
      ></img>

      <div className="home__row">{showBooks}</div>
    </div>
  );
}

export default Home;
