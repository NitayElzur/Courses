import './Calendar.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useState } from "react";
function Calendar({ data, setData }) {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        const tempArr = [];
        data.map(value => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            tempArr.push({
                title: `${value.course} - ${value.proffesor}`,
                start: value['start-date'],
                end: value['end-date'],
                color: `#${randomColor}`
            })
        })
        setEvents(tempArr)
    }, [data])
    const [events, setEvents] = useState([]);
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            eventClick={(e) => console.log(e)}
            events={events}
            aspectRatio={1}
            contentHeight={width > 768 ? width > 1100 ? width > 1500 ? width / 2.5 : width / 2 : width / 1.5 : width}
        />
    )
}
export default Calendar;