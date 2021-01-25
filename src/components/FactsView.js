import React, { useState, useEffect, useRef } from "react";
import { use100vh } from "react-div-100vh";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

import "../styles/FactsView.scss";

import biggerImgSrc from "../images/foto1_2.png";
import smallerImgSrc from "../images/foto1_1.png";
import biggerImgSrc_2x from "../images/foto1_2@2x.png";
import smallerImgSrc_2x from "../images/foto1_1@2x.png";

import { ReactComponent as FuelIcon } from "../images/fuel.svg";
import Fact from "./Fact";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
function FactsView() {
  const [isRetina, setIsRetina] = useState(false);
  const height = use100vh();
  const facts = [
    { id: "01", desc: "Ponad 600 km zasięgu *" },
    {
      id: "02",
      desc:
        "Elektryczny napęd na wszystkie koła z dwiema osiami napędzanymi elektrycznie i ponad 500 KM (370 kW) *",
    },
    { id: "03", desc: "Od 0 do 100 km / hw mniej niż 5 sekund *" },
    { id: "04", desc: "Ładowanie 120 km w 10 minut *" },
    {
      id: "05",
      desc: "Publiczne szybkie ładowanie od 10 do 80% w mniej niż 40 minut",
    },
  ];

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
          id: "facts",
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
    <div className="facts" id="facts" style={{ height: height }} ref={divRef}>
      <div className="facts__images">
        <img
          src={isRetina ? biggerImgSrc_2x : biggerImgSrc}
          className="facts__biggerImg"
          alt="Two BMW's iX."
        />
        <img
          src={isRetina ? smallerImgSrc_2x : smallerImgSrc}
          className="facts__smallerImg"
          alt="Front of BMW iX"
        />
      </div>
      <div className="facts__info">
        <FuelIcon />
        <h2 className="facts__title">FAKTY O NOWYM BMW iX</h2>
        <div className="facts__table">
          {facts.map((fact) => (
            <Fact id={fact.id} desc={fact.desc} key={fact.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FactsView;
