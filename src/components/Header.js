import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="positionheader">
      <Link to="/">{/* <img className="logo" alt="logo" src={logo} /> */}</Link>
      <p>Header barre</p>
    </div>
  );
};

export default Header;
