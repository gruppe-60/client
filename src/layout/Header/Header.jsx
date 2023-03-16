import React from "react";
<<<<<<< HEAD:src/layout/Header.jsx
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
=======
import Navbar from "../Navbar/Navbar";
import "./Header.css";
>>>>>>> b88763b2a31b84dde3407d7d89890909d0a3b9ca:src/layout/Header/Header.jsx

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const pathsWithNavbar = ["/basket", "/basket/:id"];

  return (
    <>
      <button type="submit" onClick={() => navigate("/register")}>
          Register
        </button>
        <button type="submit" onClick={() => navigate("/")}>
          Login
        </button>
      <div className="header">
        {pathsWithNavbar.includes(location.pathname) &&
          <Navbar />
        }
      </div>
    </>
  );
};

export default Header;