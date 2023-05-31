import './RevCarousel.css'
import json from '../../json/review.json'
import { useEffect, useState } from 'react';
import Carousel from 'better-react-carousel';
import RevCard from '../RevCard/RevCard';
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
            <Carousel id='revCarousellMain' rows={1} cols={1} gap={'10px'} loop autoplay={5000} containerStyle={{
                width: windowWidth > 768 ? '70vw' : '95vw',
                height: '30vh',
                zIndex: 0
            }}>
                {data &&
                    data.map((value, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <RevCard value={value} />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </>
    )
}
export default RevCarousel;