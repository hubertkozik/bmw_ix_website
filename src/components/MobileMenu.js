import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { use100vh } from "react-div-100vh";

import { ReactComponent as BmwLogo } from "../images/BMW-Logo-103x115-White-NEW.svg";

import CloseIcon from "@material-ui/icons/Close";

import "../styles/MobileMenu.scss";

function MobileMenu({ menuClicked, setMenuClicked }) {
  const height = use100vh();
  useEffect(() => {
    document.body.style.overflow = `hidden`;
  }, [menuClicked]);
  return (
    <div className="mobileMenu" style={{ height: height }}>
      <div className="mobileMenu__firstRow">
        <BmwLogo className="mobileMenu__logo" />
        <CloseIcon
          className="mobileMenu__closeIcon"
          onClick={() => {
            setMenuClicked(false);
            document.body.style.overflow = `auto`;
          }}
        />
      </div>
      <ul className="mobileMenu__menu">
        <li className="mobileMenu__menuItem">
          <Link
            to="/bmw_ix_website/#facts"
            onClick={() => {
              setMenuClicked(false);
              document.body.style.overflow = `auto`;
            }}
          >
            Nowe BMW iX
          </Link>
        </li>
        <li className="mobileMenu__menuItem">
          <Link
            to="/bmw_ix_website/#form"
            onClick={() => {
              setMenuClicked(false);
              document.body.style.overflow = `auto`;
            }}
          >
            Umów jazdę próbną
          </Link>
        </li>
        <li className="mobileMenu__menuItem">
          <Link
            to="/bmw_ix_website/#gallery"
            onClick={() => {
              setMenuClicked(false);
              document.body.style.overflow = `auto`;
            }}
          >
            Galeria
          </Link>
        </li>
      </ul>
      <div className="mobileMenu__thirdRow">
        <Link
          to="/bmw_ix_website/#form"
          className="mobileMenu__btn"
          onClick={() => {
            setMenuClicked(false);
            document.body.style.overflow = `auto`;
          }}
        >
          Umów jazdę próbną
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
