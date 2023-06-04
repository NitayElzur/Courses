import './Courses.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import Calendar from '../Calendar/Calendar';
import { MainContext } from '../../Contexts/MainContext';

function Courses() {
    const { data, setData } = useContext(MainContext);
    return (
        <div id="courseMain">
            <div className="courseText">Our Courses:</div>
            <div id='course-list-container'>
                <div id='icon-course-container'>
                    {data &&
                        data.product?.map((value, index) => {
                            return (
                                <Link to={`/ProductPage/${value.id}`}>
                                    <img className='icon-img' src={value.icon} />
                                    <p className='icon-header'>{value.course.split(' ')[0]}</p>
                                </Link>
                            )
                        })

                    }
                </div>
            </div>
            <div className="courseText">Our Upcoming Courses:</div>
            <div id="courseCalendar">
                <Calendar />
            </div>
        </div>
    )
}
export default Courses;