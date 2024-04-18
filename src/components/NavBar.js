import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/directors" className="nav-link" activeClassName="active">Directors</NavLink>
      <NavLink to="/actors" className="nav-link" activeClassName="active">Actors</NavLink>
    </nav>
  );
};

export default NavBar;
