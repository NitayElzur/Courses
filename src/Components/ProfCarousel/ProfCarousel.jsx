import "./ProfCarousel.css";
import React from "react";
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
      </div>
    </div>
  );
}
export default ProfCarousel;
