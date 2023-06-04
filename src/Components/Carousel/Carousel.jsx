import { useEffect, useState } from 'react'
import './Carousel.css'
function Carousel({ children, infiniteLoop, specialLength }) {
    const [length, setLength] = useState(0)
    const [touchPosition, setTouchPosition] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    useEffect(() => {
        setLength(specialLength ? children?.length / 2 : children?.length)
        let time;
        if (infiniteLoop) {
             time = setInterval(() => {
                setCurrentIndex(prev => prev < length - 1 ? prev + 1 : 0)
            }, 5000)
        }
        return () => {
            clearInterval(time)
        }
    }, [length, children])
    function next() {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    function prev() {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }
    return (
        <div id='carouselContainer'>
            <div className='carouselWrapper'>
                {currentIndex > 0 && <button className="leftArrow" onClick={prev}>
                    &lt;
                </button>}
                {currentIndex < (length - 1) && <button className="rightArrow" onClick={next}>
                    &gt;
                </button>}
                <div className='carouselContentWrapper' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className='carouselContent' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Carousel;