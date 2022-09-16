import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import "../css/UserCalendar.css"

const GroupCalendar = () => {

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
                // events = {myEvents}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                // eventClick = {handleEventClick}
            />
        </div>
    
    );
}
export default GroupCalendar