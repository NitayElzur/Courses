import './RevCarousel.css'
import json from '../../json/review.json'
import { useEffect, useState } from 'react';
import RevCard from '../RevCard/RevCard';
import ReactImageGallery from 'react-image-gallery';
function RevCarousel() {
    const [data, setData] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        setData(json.graduates)
    }, [json])
    useEffect(() => {
        window.addEventListener('resize', () => {setWindowWidth(window.innerWidth)})
    }, [windowWidth])
    return (
        <>
            <div id='revCarouselBigText'>Student Reviews:</div>
            <ReactImageGallery/>
        </>
    )
}
export default RevCarousel;