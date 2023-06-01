import './RevCarousel.css'
import React, { Component } from 'react';
import json from '../../json/review.json'
import { useEffect, useState } from 'react';
import RevCard from '../RevCard/RevCard';
function RevCarousel() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(json.graduates)
    }, [json])
    return (
        <>
            <div id='revCarouselBigText'>Student Reviews:</div>
        </>
    )
}
export default RevCarousel;
