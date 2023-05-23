import BurgerIcon from "../../assets/svg/BurgerIcon";
import CartIcon from "../../assets/svg/CartIcon";
import "./Navbar.scss";
import NavItem from "./NavItem";
import { useState } from "react";
import { useContext } from "react";
import { SidebarStateContext } from "../../utils/SidebarStateContext";
export default function Navbar() {
  function cartBtnHandler() {
    setIsCartActive((prev) => {
      prev || setIsMobNavActive(false);
      return !prev;
    });
  }
  function mobNavBtnHandler() {
    setIsMobNavActive((prev) => {
      prev || setIsCartActive(false);
      return !prev;
    });
  }

  const [isMobNavActive, setIsMobNavActive, isCartActive, setIsCartActive] =
    useContext(SidebarStateContext);

  return (
    <header className="navbar">
      <a href="#" className="navbar__logo-link">
        <span className="">Your</span>Car
      </a>
      <div className="navbar__container">
        <nav className="navbar__nav">
          <ul className="navbar__nav__list">
            <NavItem
              label="Home"
              to="#"
              className="navbar__nav__link"
            ></NavItem>
            <NavItem
              label="About"
              to="#about"
              className="navbar__nav__link"
            ></NavItem>
            <NavItem
              label="Services"
              to="#services"
              className="navbar__nav__link"
            ></NavItem>
            <NavItem
              label="Cars"
              to="#cars"
              className="navbar__nav__link"
            ></NavItem>
            <NavItem
              label="Contact Us"
              to="#footer"
              className="navbar__nav__link"
            ></NavItem>
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
          onClick={mobNavBtnHandler}
        ></NavItem>
      </div>
    </header>
  );
}
