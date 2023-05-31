import './HomePage.css'
import RevCarousel from '../RevCarousel/RevCarousel'
import ProfCarousel from '../ProfCarousel/ProfCarousel'
function HomePage() {
    return (
        <div id='homeMain'>
            <img id='homeImg' src="https://mobidev.biz/wp-content/uploads/2022/06/banner.png"/>
            <ProfCarousel />
            <RevCarousel />
        </div>
    )
}
export default HomePage;