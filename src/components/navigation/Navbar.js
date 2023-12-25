// Navbar.js

import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const itemsCount = useSelector((store) => store.cart.itemNumbers);
  console.log("from nev", itemsCount);
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
        <li className="nav-space">Cart Manage === {itemsCount}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
