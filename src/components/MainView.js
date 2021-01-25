import React, { useState, useEffect, useRef } from "react";
import { use100vh } from "react-div-100vh";
import { HashLink as Link } from "react-router-hash-link";
import { gsap } from "gsap/all";

import BackgroundSlider from "react-background-slider";
import MenuBar from "./MenuBar";
import "../styles/MainView.scss";

import { ReactComponent as BMWiXLogo } from "../images/BMW_i_Grey-Colour_RGB.svg";

import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";
import slider1_2x from "../images/slider1@2x.png";
import slider2_2x from "../images/slider2@2x.png";
import slider3_2x from "../images/slider3@2x.png";

const slidersArray = [slider1, slider2, slider3];
const slidersArray_2x = [slider1_2x, slider2_2x, slider3_2x];

function MainView() {
  const height = use100vh();
  const [menuClicked, setMenuClicked] = useState(false);
  const [actualSliderPos, setActualSliderPos] = useState(1);
  const [whichSlider, setWhichSlider] = useState([true, false, false]);
  const [isRetina, setIsRetina] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (actualSliderPos < slidersArray.length - 1) {
        setActualSliderPos(actualSliderPos + 1);
      } else {
        setActualSliderPos(0);
      }
      let temp = [false, false, false];
      temp[actualSliderPos] = true;
      setWhichSlider(temp);
    }, 11000);
    const query =
      "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";
    if (matchMedia(query).matches) setIsRetina(true);
    else setIsRetina(false);

    return () => {
      clearInterval(interval);
    };
  }, [actualSliderPos]);
  const divRef = useRef(null);
  useEffect(() => {
    const div = divRef.current.children;
    gsap.fromTo(
      div,
      { autoAlpha: 0 },
      {
        duration: 0.5,
        stagger: 0.2,
        autoAlpha: 1,
        ease: "none",
      }
    );
  }, []);
  return (
    <>
      <BackgroundSlider
        images={isRetina ? slidersArray_2x : slidersArray}
        duration={10}
        transition={1}
      />
      <div
        className="main"
        style={{
          height: height,
        }}
        ref={divRef}
      >
        <MenuBar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
        <div className="main__text">
          <BMWiXLogo />
          <h1 className="main__title">NOWE BMW&nbsp;iX</h1>
          <h5 className="main__titleDesc">PIONIER NOWEJ ERY</h5>
        </div>

        <div className="main__bottom">
          <ul className="main__slider">
            {whichSlider.map((oneSlider, index) => {
              return (
                <li
                  className={
                    oneSlider
                      ? `main__sliderItem main__sliderItem--active`
                      : `main__sliderItem`
                  }
                  key={index}
                >
                  {oneSlider}
                </li>
              );
            })}
          </ul>

          <Link
            to="/bmw_ix_website/#form"
            className="main__btn"
            onClick={() => {
              setMenuClicked(false);
              document.body.style.overflow = `auto`;
            }}
          >
            Umów jazdę próbną
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainView;
