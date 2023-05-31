import './HomePage.css'
import RevCarousel from '../RevCarousel/RevCarousel'
import ProfCarousel from '../ProfCarousel/ProfCarousel'
function HomePage() {
    return (
        <div id='homeMain'>
            <br /><br /><br /><br /><br />
            <ProfCarousel />
            <RevCarousel />
        </div>
    )
}
export default HomePage;