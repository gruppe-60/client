import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

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