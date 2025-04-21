import { NavLink } from "react-router-dom";

import "./module.Header.css";

function Header() {
  return (
    <div className="header-section">
      <header>
        <NavLink to="/">
          <img
            src="src\assets\sahayog-logo.jpg"
            alt="header-logo"
            className="logo"
          />
        </NavLink>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Our Work</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </div>
  );
}

export default Header;
