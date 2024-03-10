import React from "react";
import logo from "../../img/header-logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" width={200} />
          <div className="header--nav">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/popular"}> Popular</NavLink>
            <NavLink to={"/topRetad"}> TopRetad</NavLink>
          </div>
          <div className="header--search">
            <input type="text" placeholder="search" />
            <button>search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
