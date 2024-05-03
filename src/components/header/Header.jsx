import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <nav className="headerContainer">
      <div className="logo">
        <h2>Cake <span>Art</span></h2>
      </div>
      <div className="menu">
        <div className="menuLeft">
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Recipes</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="menuRight">
          <div className="searchBar">searchBar</div>
          <div className="cart">cart</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
