import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import "../css/UserCalendar.css"

const GroupCalendar = () => {
    const myEvents = [
        {id: 1, title: "event 1", start: '2022-09-14T22:30'},
        {id: 2, title: "event 2", start: '2022-09-14T11:30'},
        {id: 3, title: "event 3", start: '2022-09-14T13:30'},
        {id: 4, title: "event 4", start: '2022-09-14T03:30'},
        {id: 5, title: "event 5", start: '2022-09-14T04:30'},
        {id: 6, title: "event 6", start: '2022-09-14T05:30'},
        {id: 7, title: "event 7", start: '2022-09-14T06:30'}
    ]
    

    const handleEventClick = (e) =>{
        const {id, title, start, end} = e.event  
    }



    return (
        <div className = "groupCalendarContainer">
            <FullCalendar
                className = "calendar"
                timeZone='EST'
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView="dayGridMonth"
                events = {myEvents}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                eventClick = {handleEventClick}
            />
        </div>
    
    );
}
export default GroupCalendar