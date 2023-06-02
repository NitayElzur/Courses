import './Calendar.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useState } from "react";
function Calendar() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    }, [])
    const [events, setEvents] = useState([
        { title: 'FullStack Course - yonatan ben ezra', start: '2023-06-01', end: '2023-08-03', color: 'green' },
        { title: 'DevOps Course', start: '2023-07-02', end: '2023-08-01' },
    ])
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