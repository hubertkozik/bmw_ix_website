import React, { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

import "../styles/Gallery.scss";

import img1 from "../images/gal1.png";
import img2 from "../images/gal2.png";
import img1_2x from "../images/gal1@2x.png";
import img2_2x from "../images/gal2@2x.png";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

function Gallery() {
  const [isRetina, setIsRetina] = useState(false);

  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current.children;
    gsap.fromTo(
      div,
      { y: "+=300", autoAlpha: 0 },
      {
        duration: 1,
        y: "-=300",
        autoAlpha: 1,
        ease: "none",

        scrollTrigger: {
          id: "gallery",
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
    <div className="gallery" id="gallery" ref={divRef}>
      <img
        src={isRetina ? img1_2x : img1}
        alt="Zdjęcie galerii 1"
        className="gallery__imgLeft"
      />
      <img
        src={isRetina ? img2_2x : img2}
        alt="Zdjęcie galerii 2"
        className="gallery__imgRight"
      />
    </div>
  );
}

export default Gallery;
