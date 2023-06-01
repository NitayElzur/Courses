import "./ProfCarousel.css";
import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import json from "../../json/review.json";
import { useState, useEffect } from "react";
import ProfCard from "./ProfCard";
import "./ProfCarousel.css";
import ProductPage from "../ProductPage/ProductPage.jsx"

function ProfCarousel() {
  const [detail, setdetail] = useState([]);
  useEffect(() => {
    setdetail(json.proffesors);
  }, [json]);

  return (
    <div id="carousel">
      <div id="prof-header">
        <h1>Our Proffesors:</h1>
      </div>
      <div id="carousel-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={7}
        >
        <Slider id="slider-container">
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>
      </div>
    </div>
  );
}
export default ProfCarousel;
