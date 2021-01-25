import React, { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import { use100vh } from "react-div-100vh";

import "../styles/FormView.scss";

import topBMW from "../images/topBMW.png";
import bottomBMW from "../images/bottomBMW.png";
import topBMW_2x from "../images/topBMW@2x.png";
import bottomBMW_2x from "../images/bottomBMW@2x.png";

import Form from "./Form";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

function FormView() {
  const [isRetina, setIsRetina] = useState(false);

  const height = use100vh();

  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    gsap.fromTo(
      div,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",

        scrollTrigger: {
          id: "form",
          trigger: div,
          start: "top center",
        },
      }
    );
    const query =
      "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";
    if (matchMedia(query).matches) setIsRetina(true);
    else setIsRetina(false);
  }, []);

  return (
    <div className="form" id="form" style={{ height: height }} ref={divRef}>
      <img
        src={isRetina ? topBMW_2x : topBMW}
        alt="BMW iX"
        className="form__topBMW"
      />

      <div className="form__wrapper">
        <h2 className="form__title">
          Umów jazdę próbną <span className="form__sup">BMW&nbsp;iX</span>
        </h2>
        <h4 className="form__subtitle">
          Zachęcamy do ograniczenia poruszania się i pozostania w domu.{" "}
        </h4>
        <h4 className="form__subtitle">
          Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie
          poniższego formularza.
        </h4>

        <Form />
      </div>

      <img
        src={isRetina ? bottomBMW_2x : bottomBMW}
        alt="BMW iX"
        className="form__bottomBMW"
      />
    </div>
  );
}

export default FormView;
