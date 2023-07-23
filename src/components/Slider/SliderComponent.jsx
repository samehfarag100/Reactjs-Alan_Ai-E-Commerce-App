import React, { useState } from "react";
import "./Slider.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useSliderHooks from "../../Hooks/sliderHook/useSliderHooks";
const SliderComponent = () => {
  const [currentSlide, data, prevSlide, nextSlide] = useSliderHooks();

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[currentSlide]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
