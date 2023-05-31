import './HomePage.css'
import RevCarousel from '../RevCarousel/RevCarousel'
import ProfCarousel from '../ProfCarousel/ProfCarousel'
function HomePage() {
    return (
        <div id='homeMain'>
            <div id="homeBanner">
                <span>Ignite Your Passion for Technology through Expert Training</span>
            </div>
            <ProfCarousel />
            <RevCarousel />
        </div>
    )
}
export default HomePage;