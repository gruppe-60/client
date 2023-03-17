import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import Context from "../global/Context";
import "./Navbar.css";

const Navbar = () => {
  // const {showNavbar, setShowNavbar} = useContext(Context);
  
  const items = [
    { name: "Home", to: "/" },
    { name: "Add Item", to: "/add-item" },
    { name: "Basket", to: "/basket" },
  ];
  return (
    <>
      
        <nav className="navi">
          <ul className="ul">
            {items.map((item) => {
              return (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      
    </>
  );
};

export default Navbar;
