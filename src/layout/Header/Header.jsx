import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const pathsWithNavbar = ["/basket", "/basket/:id"];

  return (
    <>
      <div className="header">
        <div className="logo-container">
        <h1>SHOPLIST</h1>
        </div>
        {pathsWithNavbar.includes(location.pathname) &&
          <Navbar />
        }
      </div>
      <button className="registerbutton" type="submit" onClick={() => navigate("/register")}>
        Register
      </button>
      <button className="loginbutton" type="submit" onClick={() => navigate("/")}>
        Login
      </button>
    </>
  );
};

export default Header;