import './Calendar.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router';
import { MainContext } from '../../Contexts/MainContext';
function Calendar() {
    const { data, setData } = useContext(MainContext);
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.innerWidth);
    const colors = [
        '#59b4c2',
        '#8059c2',
        '#5986c2',
        '#b259c2',
        '#ba418a',
        '#bf5268',
        '#bf5b52',
        '#bf8b52',
        '#adbf52'
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