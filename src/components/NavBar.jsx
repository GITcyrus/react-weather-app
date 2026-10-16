import React from "react";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Weather Network</h1>
        {/* <Link to="/">Movie App</Link> */}
      </div>
      <div className="navbar-links">
        {/* <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link> */}
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
        <p>Option 4</p>
      </div>
    </nav>
  );
};

export default NavBar;
