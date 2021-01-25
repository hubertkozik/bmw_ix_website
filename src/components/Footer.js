import React from "react";
import { Link } from "react-router-dom";

import "../styles/Footer.scss";

import { ReactComponent as FbIcon } from "../images/fb.svg";
import { ReactComponent as IgIcon } from "../images/ig.svg";
import { ReactComponent as YtIcon } from "../images/yt.svg";
import { ReactComponent as InIcon } from "../images/in.svg";
import { ReactComponent as TtIcon } from "../images/tt.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__firstRow">
        <p className="footer__firstRowText">Dołącz do nas</p>
        <div className="footer__firstRowIcons">
          <FbIcon />
          <IgIcon />
          <YtIcon />
          <InIcon />
          <TtIcon />
        </div>
      </div>
      <div className="footer__secondRow">
        <div className="footer__frame">
          <h4 className="footer__frameTitle">Strefa Klienta</h4>
          <Link to="#" className="footer__frameLink">
            Centrum Obsługi Klienta BMW
          </Link>
          <Link to="#" className="footer__frameLink">
            Znajdź dealera BMW
          </Link>
          <Link to="#" className="footer__frameLink">
            Pobierz cenniki / broszury
          </Link>
          <Link to="#" className="footer__frameLink">
            Często zadawane pytania
          </Link>
        </div>

        <div className="footer__frame">
          <h4 className="footer__frameTitle">Poznaj BMW</h4>
          <Link to="#" className="footer__frameLink">
            Informacje prasowe
          </Link>
          <Link to="#" className="footer__frameLink">
            BMW Polska
          </Link>
          <Link to="#" className="footer__frameLink">
            Kariera
          </Link>
        </div>

        <div className="footer__frame">
          <h4 className="footer__frameTitle">Informacje prawne</h4>
          <Link to="#" className="footer__frameLink">
            Mapa serwisu
          </Link>
          <Link to="#" className="footer__frameLink">
            Nota prawna / Prywatność
          </Link>
          <Link to="#" className="footer__frameLink">
            Polityka cookie
          </Link>
          <Link to="#" className="footer__frameLink">
            Warunki korzystania z MyBMW
          </Link>
        </div>
      </div>
      <div className="footer__thirdRow">
        <p>© BMW Polska 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
