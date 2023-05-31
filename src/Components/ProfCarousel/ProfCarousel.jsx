import './ProfCarousel.css'
import React from 'react';
import Carousel from 'better-react-carousel';
import json from '../../json/review.json';
import { useState, useEffect } from 'react';
import ProfCard from './profCard';
import './ProfCarousel.css'

function ProfCarousel() {
const [detail, setdetail]= useState([])
useEffect(()=>{
    setdetail(json.proffesors)
}, [json])

return (
    <div id="carousel-container">
      <Carousel cols={2} rows={1} gap={7} loop autoPlay={5000} containerStyle={{
        zIndex: 0
      }}>
        {detail &&
          detail.map((value, index) => (
            <Carousel.Item key={index}>
              <ProfCard result={value} />
            </Carousel.Item>
          ))}
      </Carousel>
        </div>
    )
}
export default ProfCarousel;