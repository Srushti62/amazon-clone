import React from "react";
import { Link } from "react-router-dom";
import "./Header2.css";

const Header2 = () => {
  return (
    <>
      <div className="header2">
        <div className="header_twoLinks">
          <Link to="/" className="nav_link">
            <h4>All</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Best Sellers</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Deal Store</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Customer Service</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>New Releases</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Prime</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Fashion</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Sell</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Electronics</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Home</h4>
          </Link>
          <Link to="/" className="nav_link">
            <h4>Books</h4>
          </Link>
        </div>

        <div>
          <Link to="/" className="nav_link">
            <h1>Prime | <strong>Movies and TV Shows</strong></h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header2;
