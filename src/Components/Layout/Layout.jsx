import './Layout.css'
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import MobileButton from '../MobileButton/MobileButton';
import ContactUs from '../ContactUs/ContactUs';
function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div id='layoutMain'>
            <div id="layoutHeader">
                <div id='layoutLogo'>
                    <img src="src\photos\high road_20230530205327.png" alt="" />
                </div>
                <div id='mobileLinks'>
                    <MobileButton isMenu={isMenuOpen} setMenu={setIsMenuOpen} />
                </div>
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
                    <ContactUs />
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