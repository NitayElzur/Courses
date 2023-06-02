import './Calendar.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState } from "react";
function Calendar() {
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
            contentHeight={window.innerWidth}
        />
    )
}
export default Calendar;