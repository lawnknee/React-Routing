import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/">
        VendingMachine
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/soda">
        soda
      </NavLink>
      <NavLink exact to="/hotdog">
        hotdog
      </NavLink>
    </nav>
  );
}

export default Navbar;