import './RevCarousel.css'
import json from '../../json/review.json'
import { useEffect, useState } from 'react';
import Carousel from 'better-react-carousel';
import RevCard from '../RevCard/RevCard';
function RevCarousel() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(json.graduates)
    }, [json])
    return (
        <Carousel id='revCarousellMain' rows={1} cols={2} gap={'10px'} loop autoplay={5000} containerStyle={{
            width: '90vw',
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
    )
}
export default RevCarousel;