import CartIcon from "../../assets/svg/CartIcon";
import "./Navbar.scss";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="navbar__logo-link">
        <span className="">Your</span>Car
      </a>
      <nav className="navbar__nav">
        <ul className="navbar__nav__list">
          <NavItem label="Home" to="/"></NavItem>
          <NavItem label="About" to="/"></NavItem>
          <NavItem label="Services" to="/"></NavItem>
          <NavItem label="Cars" to="/"></NavItem>
          <NavItem label="Contact Us" to="/"></NavItem>
          <NavItem label={<CartIcon fill="white" size="4rem" />} btn></NavItem>
        </ul>
      </nav>
    </header>
  );
}
