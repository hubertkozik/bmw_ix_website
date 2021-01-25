import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../styles/MenuBar.scss";

import { ReactComponent as BmwLogo } from "../images/BMW-Logo-103x115-White-NEW.svg";

import MenuIcon from "@material-ui/icons/Menu";
import MobileMenu from "./MobileMenu";

function MenuBar({ menuClicked, setMenuClicked }) {
  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="menuBar">
      <MenuIcon onClick={() => handleMenuClick()} className="menuBar__click" />
      {menuClicked && (
        <MobileMenu menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      )}
      <ul className="menuBar__menu">
        <li className="menuBar__menuItem">
          <Link to="/bmw_ix_website/#facts">Nowe BMW iX</Link>
        </li>
        <li className="menuBar__menuItem">
          <Link to="/bmw_ix_website/#form">Umów jazdę próbną</Link>
        </li>
        <p className="menuBar__slogan">
          <span className="boldIt">Radość</span> z jazdy
        </p>
      </ul>
      <BmwLogo className="menuBar__logo" />
    </nav>
  );
}

export default MenuBar;
