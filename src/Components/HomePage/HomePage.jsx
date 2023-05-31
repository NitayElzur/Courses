import './HomePage.css'
import RevCarousel from '../RevCarousel/RevCarousel'
import ProfCarousel from '../ProfCarousel/ProfCarousel'
function HomePage() {
    return (
        <div id='homeMain'>
            <ProfCarousel />
            <RevCarousel />
        </div>
    )
}
export default HomePage;