import { useEffect, useState } from 'react';
import './Layout.css'
import { Outlet, Link } from 'react-router-dom';
import MobileButton from './MobileButton/MobileButton';
function Layout() {
    const [width, setWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        window.innerWidth < 769 ? setIsMobile(true) : setIsMobile(false)
        window.addEventListener('resize', () => { setWidth(window.innerWidth) })
    }, [isMobile, width])
    useEffect(() => {
        isMenuOpen ? console.log('open') : console.log('close')
    }, [isMenuOpen])
    return (
        <div id='layoutMain'>
            <div id="layoutHeader">
                <div id='layoutLogo'>

                </div>
                {isMobile ?
                    <div id='mobileLinks'>
                        <MobileButton isMenu={isMenuOpen} setMenu={setIsMenuOpen} />
                    </div>
                    :
                    <div id="layoutLinks">
                        <Link className='headerLink'>
                            Home
                        </Link>
                        <Link className='headerLink'>
                            Courses
                        </Link>
                        <Link className='headerLink'>
                            Admin Page
                        </Link>
                    </div>
                    
                }
            </div>
            {isMenuOpen &&
                            <div id="divLinks">
                                <Link className='headerLink'>
                                    Home
                                </Link>
                                <Link className='headerLink'>
                                    Courses
                                </Link>
                                <Link className='headerLink'>
                                    Admin Page
                                </Link>
                            </div>
                        }
            <div id="layoutContent">
                <Outlet />
                <hr />
                <div id="layoutFooter">
                    <div id="footerContact"></div>
                    <div id="footerLinks">
                        <div className="footerColumnLink">
                            <div className="dummyLink">Services</div>
                            <div className="dummyLink">Products</div>
                            <div className="dummyLink">FAQ</div>
                            <div className="dummyLink">Privacy Policy</div>
                            <div className="dummyLink">Terms and Conditions</div>
                        </div>
                        <div className="footerColumnLink">
                            <div className="dummyLink">Careers</div>
                            <div className="dummyLink">Blog</div>
                            <div className="dummyLink">Testimonials</div>
                            <div className="dummyLink">Portfolio</div>
                            <div className="dummyLink">Our Team</div>
                        </div>
                        <div className="footerColumnLink">
                            <div className="dummyLink">Gallery</div>
                            <div className="dummyLink">Partners</div>
                            <div className="dummyLink">Support</div>
                            <div className="dummyLink">Sitemap</div>
                            <div className="dummyLink">Newsletter</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout;