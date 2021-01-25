import React, { useState, useEffect, useRef } from "react";
import { use100vh } from "react-div-100vh";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

import "../styles/InfoView.scss";

import biggerImgSrc from "../images/foto2_1.png";
import smallerImgSrc from "../images/foto2_2.png";
import biggerImgSrc_2x from "../images/foto2_1@2x.png";
import smallerImgSrc_2x from "../images/foto2_2@2x.png";

import { ReactComponent as CarIcon } from "../images/carInfo.svg";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
function InfoView() {
  const [isRetina, setIsRetina] = useState(false);

  const height = use100vh();

  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current.children;
    gsap.fromTo(
      div,
      { x: "-=300", autoAlpha: 0 },
      {
        duration: 1,
        x: "+=300",
        autoAlpha: 1,
        ease: "none",

        scrollTrigger: {
          id: "info",
          trigger: div,
          start: "top bottom",
        },
      }
    );
    const query =
      "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";
    if (matchMedia(query).matches) setIsRetina(true);
    else setIsRetina(false);
  }, []);

  return (
    <div className="info" id="info" style={{ height: height }} ref={divRef}>
      <div className="info__info">
        <CarIcon />
        <h2 className="info__title">INNOWACYJNAAERODYNAMIKABMW iX.</h2>
        <h4 className="info__subtitle">
          BMW iX w każdym milimetrze swojej dynamicznej stylistyki wdraża zasadę
          „forma podąża za funkcją”.{" "}
        </h4>
        <p className="info__desc">
          Widać to przede wszystkim po gładkiej karoserii ze zwężoną nadbudową
          kabiny i zredukowanymi fugami oraz po płaskim podwoziu. W połączeniu z
          zamkniętym przodem oraz dyfuzorem z tyłu i niezwykłymi detalami,
          takimi jak wpuszczane klamki czy zintegrowane z listwami szybowymi
          lusterka zewnętrzne, BMW iX osiąga doskonały współczynnik Cx wynoszący
          zaledwie 0,25. Dzięki temu łączy w sobie zasięg i wydajność z
          innowacyjną konstrukcją SAV-a.
        </p>
      </div>

      <div className="info__images">
        <img
          src={isRetina ? biggerImgSrc_2x : biggerImgSrc}
          className="info__biggerImg"
          alt="Right side of BMW iX"
        />
        <img
          src={isRetina ? smallerImgSrc_2x : smallerImgSrc}
          className="info__smallerImg"
          alt="Back of BMW iX"
        />
      </div>
    </div>
  );
}

export default InfoView;
