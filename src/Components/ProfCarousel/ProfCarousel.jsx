import "./ProfCarousel.css";
import React from "react";
import Carousel from "better-react-carousel";
import json from "../../json/review.json";
import { useState, useEffect } from "react";
import ProfCard from "./profCard";
import "./ProfCarousel.css";

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
        <Carousel
          cols={2}
          rows={1}
          gap={100}
          loop
          mobileBreakpoint={960}
          containerStyle={{
            zIndex: 0,
            width: '90%'
          }}
        >
          {detail &&
            detail.map((value, index) => (
              <Carousel.Item key={index}>
                <ProfCard result={value} />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
export default ProfCarousel;
