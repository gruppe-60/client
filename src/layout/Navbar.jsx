import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {


  const items = [
    {name: "Home", to: "/"},
    {name: "Add Item", to: "/add-item"},
    {name: "Basket", to: "/basket"},
  ]
  return (
    <nav>
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
  )
}

export default Navbar;