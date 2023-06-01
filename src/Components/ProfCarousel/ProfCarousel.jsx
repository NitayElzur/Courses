import "./ProfCarousel.css";
import React from "react";
import Carousel from "better-react-carousel";
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
        <Carousel
          cols={2}
          rows={1}
          gap={100}
          loop
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
        <ProductPage/>
      </div>
    </div>
  );
}
export default ProfCarousel;
