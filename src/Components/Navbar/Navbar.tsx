import BurgerIcon from "../../assets/svg/BurgerIcon";
import CartIcon from "../../assets/svg/CartIcon";
import "./Navbar.scss";
import NavItem from "./NavItem";

export default function Navbar() {
  function cartBtnHandler() {}

  return (
    <header className="navbar">
      <a href="#" className="navbar__logo-link">
        <span className="">Your</span>Car
      </a>
      <div className="navbar__container">
        <nav className="navbar__nav">
          <ul className="navbar__nav__list">
            <NavItem label="Home" to="/"></NavItem>
            <NavItem label="About" to="/"></NavItem>
            <NavItem label="Services" to="/"></NavItem>
            <NavItem label="Cars" to="/"></NavItem>
            <NavItem label="Contact Us" to="/"></NavItem>
          </ul>
        </nav>
        <NavItem
          className="navbar__mob-btn navbar__cart-btn"
          label={<CartIcon />}
          btn
          onClick={cartBtnHandler}
        ></NavItem>
        <NavItem
          className="navbar__mob-btn navbar__burger-btn"
          label={<BurgerIcon />}
          btn
        ></NavItem>
      </div>
    </header>
  );
}
