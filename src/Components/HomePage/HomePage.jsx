import './HomePage.css'
import Carousel from '../Carousel/Carousel';
import RevCard from '../RevCard/RevCard';
import json from '../../json/review.json'
import { useEffect, useState } from 'react';
import ProfCard from '../ProfCarousel/ProfCard';
function HomePage() {
    const [reviews, setReviews] = useState([]);
    const [proffesors, setProffesors] = useState([]);
    useEffect(() => {
        setReviews(json.graduates);
        setProffesors(json.proffesors);
    }, [json])
    return (
        <div id='homeMain'>
            <div id="homeBanner">
                <span>Ignite Your Passion for Technology through Expert Training</span>
            </div>
            <div className='homeBigText'>Our Proffesors:</div>
            <Carousel>
                {proffesors &&
                    proffesors.map((value, index) => {
                        return (
                            <ProfCard key={index} result={value} />
                        )
                    })
                }
            </Carousel>
                <div className='homeBigText'>Student Reviews:</div>
            <Carousel infiniteLoop={true}>
                {reviews &&
                    reviews.map((value, index) => {
                        return (
                            <RevCard key={index} value={value} />
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
export default HomePage;