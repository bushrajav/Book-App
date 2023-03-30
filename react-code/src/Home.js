import React from "react";
import Product from "./Product";
import "./Home.css";
import { useState, useEffect } from "react";
import Search from "./Search";

function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const apiUrl = "http://localhost:8080/books";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      });
  }, []);

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://lh3.googleusercontent.com/6WyNIiJbd8H_jfH9XoS9VTqc2bS6pKWibV0N1aYn30ilKOXbJsccHBr-3IWmqSD6lcbX1U7yF7mcl-GAwbRfONlgYrkv4_fx2ZtCOY0R"
        alt=""
      ></img>
      <Search results={books} setFilteredResults={setFilteredBooks} />
      <div className="home__row">
        {filteredBooks.map((book) => (
          <Product
            key={book.id}
            title={book.title}
            price={book.price}
            image={book.image}
          />
        ))}
      </div>
      {/* <div className="home__row">{showBooks}</div> */}
    </div>
  );
}

export default Home;

// const [showBooks, setshowBooks] = useState("");
// const apiUrl = "http://localhost:8080/books";

// let displayData;
// function pullJSON() {
//   fetch(apiUrl).then((response) =>
//     response.json().then((responseData) => {
//       displayData = responseData.map(function (book) {
//         return (
//           <Product
//             key={book.id}
//             title={book.title}
//             price={book.price}
//             image={book.image}
//           ></Product>
//         );
//       });
//       console.log(responseData);
//       setshowBooks(displayData);
//     })
//   );
//   // return;
// }

// useEffect(() => {
//   pullJSON();
// }, []);
