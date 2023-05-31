import './RevCarousel.css'
import json from '../../json/review.json'
import { useEffect, useState } from 'react';
import Carousel from 'better-react-carousel';
function RevCarousel() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(json.graduates)
    }, [json])
    console.log(data[0]?.img);
    return (
        <Carousel id='revCarousellMain' rows={1} cols={2} gap={'10px'} loop>
            <Carousel.Item>
                <img src={data && data[0]?.img} width={'100%'} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={data && data[1]?.img} width={'100%'} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={data && data[2]?.img} width={'100%'} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={data && data[3]?.img} width={'100%'} />
            </Carousel.Item>
        </Carousel>
    )
}
export default RevCarousel;