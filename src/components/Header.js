import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="container">
      <Link to="/">
        <img className="logo" alt="logo" src={logo} />
      </Link>
    </div>
  );
};

export default Header;
