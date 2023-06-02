import './Courses.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import json from "../../json/review.json";
import React from 'react';
import Calendar from '../Calendar/Calendar';

function Courses() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(json.product);
    }, []);
    return (
        <div id="courseMain">
            <div className="courseText">Our Upcoming Courses:</div>
            <div id="courseCalendar">
                <Calendar data={product} setData={setProduct}/>
            </div>
            <div className="courseText">Our Courses:</div>
            <div id='course-list-container'>
                <div id='icon-course-container'>
                    <Link to={`/ProductPage/${1}`}><img className='icon-img' src="data:image/png;base64,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" /><p className='icon-header'>Software</p></Link>
                    <Link to={`/ProductPage/${2}`}><img className='icon-img' src="data:image/png;base64,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" /><p className='icon-header'>Full Stack</p></Link>
                    <Link to={`/ProductPage/${3}`}><img className='icon-img' src="data:image/png;base64,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" /><p className='icon-header'>Cyber</p></Link>
                    <Link to={`/ProductPage/${4}`}><img className='icon-img' src="data:image/png;base64,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" /><p className='icon-header'>UX/UI</p></Link>
                    <Link to={`/ProductPage/${5}`}><img className='icon-img' src="data:image/png;base64,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" /><p className='icon-header'>Gaming</p></Link>
                    <Link to={`/ProductPage/${6}`}><img className='icon-img' src="data:image/png;base64,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" /><p className='icon-header'>QA</p></Link>
                    <Link to={`/ProductPage/${7}`}><img className='icon-img' src="data:image/png;base64,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" /><p className='icon-header'>Network</p></Link>
                </div>
            </div>
        </div>
    )
}
export default Courses;