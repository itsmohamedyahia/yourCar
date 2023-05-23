import "./NavSidebar.scss";
import { useContext } from "react";
import { SidebarStateContext } from "../../utils/SidebarStateContext";
import NavItem from "../Navbar/NavItem";

export default function NavSidebar() {
  const [isActive, setIsActive] = useContext(SidebarStateContext);

  return (
    <aside className={`mob-sidebar ${!isActive && "side-hidden"}`}>
      <nav className="mob-sidebar__nav">
        <ul className="mob-sidebar__nav__list">
          <NavItem
            label="Home"
            to="#"
            className="mob-sidebar__nav__list__li"
          ></NavItem>
          <NavItem
            label="About"
            to="#about"
            className="mob-sidebar__nav__list__li"
          ></NavItem>
          <NavItem
            label="Services"
            to="#services"
            className="mob-sidebar__nav__list__li"
          ></NavItem>
          <NavItem
            label="Cars"
            to="#cars"
            className="mob-sidebar__nav__list__li"
          ></NavItem>
          <NavItem
            label="Contact Us"
            to="#footer"
            className="mob-sidebar__nav__list__li"
          ></NavItem>
        </ul>
      </nav>
    </aside>
  );
}

/*
 
*/
