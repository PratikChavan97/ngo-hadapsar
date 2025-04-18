import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-section">
      <header>
        <h2>Sahakarya NGO</h2>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Our Work</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
    </div>
  );
}

export default Header;
