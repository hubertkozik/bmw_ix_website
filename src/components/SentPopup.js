import React, { useEffect } from "react";

import "../styles/SentPopup.scss";

function SentPopup({ sentPopup, setSentPopup }) {
  useEffect(() => {
    document.body.style.overflow = `hidden`;
  }, [sentPopup]);
  return (
    <div className="sentPopup">
      <div className="sentPopup__wrapper">
        <h4 className="sentPopup__title">DZIĘKUJEMY</h4>
        <p className="sentPopup__text">
          Skontaktujemy się z Tobą w najbliższym możliwym terminie.
        </p>
        <button
          className="sentPopup__btn"
          onClick={() => {
            setSentPopup(false);
            document.body.style.overflow = `auto`;
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default SentPopup;
