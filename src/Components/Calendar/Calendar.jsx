import './Calendar.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router';
import { MainContext } from '../../Contexts/MainContext';
function Calendar() {
    const { data, setData } = useContext(MainContext);
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.innerWidth);
    const colors = [
        '#32a852',
        '#540206',
        '#3244a8',
        '#a0a832',
        '#a83290',
        '#7132a8',
        '#04701f',
        '#32e1ed',
        '#66ffa6'
    ]
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        const tempArr = [];
        data.product?.map((value, index) => {
            tempArr.push({
                title: `${value.course} - ${value.proffesor}`,
                start: value['start-date'],
                end: value['end-date'],
                color: colors[index]
            })
        })
        setEvents(tempArr)
    }, [data])
    const [events, setEvents] = useState([]);
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            eventClick={(e) => {
                navigate(`/ProductPage/${data.product?.filter(value => value.proffesor === e.event.title.split(' - ')[1] && value.course === e.event.title.split(' - ')[0])[0].id}`)
            }}
            events={events}
            aspectRatio={1}
            contentHeight={width > 768 ? width > 1100 ? width > 1500 ? width / 2.5 : width / 2 : width / 1.5 : width}
        />
    )
}
export default Calendar;