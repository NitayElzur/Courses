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
                    <Link to={'/'}>
                        <img src="https://res.cloudinary.com/dol6p0ex8/image/upload/v1685621615/High-Road/high_road_20230530205327_mjtd2m.png" />
                    </Link>
                </div>
                <div id='mobileLinks'>
                    <MobileButton isMenu={isMenuOpen} setMenu={setIsMenuOpen} />
                </div>
                <div id="layoutLinks">
                    <Link className='headerLink' to={'/'}>
                        Home
                    </Link>
                    <Link className='headerLink' to={'/courses'}>
                        Courses
                    </Link>
                    <Link className='headerLink' to={'/login'}>
                        Login
                    </Link>
                </div>
            </div>
            {isMenuOpen &&
                <div id="divLinks">
                    <Link className='headerLink' onClick={() => { setIsMenuOpen(false) }} to={'/'}>
                        Home
                    </Link>
                    <Link className='headerLink' onClick={() => { setIsMenuOpen(false) }} to={'/courses'}>
                        Courses
                    </Link>
                    <Link className='headerLink' onClick={() => { setIsMenuOpen(false) }} to={'/login'}>
                        Login
                    </Link>
                </div>
            }
            <div id="layoutContent">
                <Outlet />
                <div id="layoutFooter">
                    <ContactUs />
                    <div id="footerLinks">
                        <div className="footerColumnLink">
                            <div className="dummyLink" >Contact Us With:</div>
                            <a target='_blank' href="https://api.whatsapp.com/send?phone=972587545966&text=Please%20tell%20me%20about%20your%20coures">
                                <div id='whatsapp' className='dummyLink'>Whatsapp</div>
                            </a>
                            <div className="dummyLink">Phone</div>
                            <div className="dummyLink">Linkdin</div>
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