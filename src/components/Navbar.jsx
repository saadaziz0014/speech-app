import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        {/* As a link */}
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Home
            </NavLink>
          </div>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/stot">
              Speech to Text
            </NavLink>
          </div>
        </nav>
        {/* As a heading */}
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Speech App</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
