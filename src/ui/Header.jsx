import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h2>Sahakarya NGO</h2>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}

export default Header;
