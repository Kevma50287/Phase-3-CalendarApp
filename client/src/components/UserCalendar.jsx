import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import "../css/UserCalendar.css"

const UserCalendar = ({userEvents}) => {

    return (
        <div className = "userCalendarContainer">
            <FullCalendar
                className = "calendar"
                timeZone='EST'
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title, addEventButton',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView="dayGridMonth"
                events = {userEvents}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                customButtons={
                    {
                        addEventButton: {
                            text: 'Add Event',
                            click: () => {
                                
                            }
                        }
                    }
                }
                
            />
        </div>
    
    );
}
export default UserCalendar