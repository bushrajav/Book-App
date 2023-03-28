import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="header">
      {/* logo/img */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://thumbs.dreamstime.com/b/green-tree-logo-design-simple-vector-tree-icon-green-tree-logo-design-white-background-124365698.jpg"
          alt=""
        ></img>
      </Link>

      {/* searcharea */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search..."
          // onChange={(event) => {
          //   event.target.value;
          // }}
        ></input>
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* Link1 */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Please</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* Link2 */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        {/* Link3 */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Favourites</span>
          </div>
        </Link>
        {/* Link4 */}
        <Link to="/checkout" className="header__link">
          {/* <div className="header__optionBasket"> */}
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Basket</span>
            {/* <ShoppingBasketIcon></ShoppingBasketIcon> */}

            {/* num of books */}
            <span className="header__optionLineTwo header__basketCount">
              {/* {basket.length} */}
            </span>
          </div>
        </Link>
      </div>
      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
