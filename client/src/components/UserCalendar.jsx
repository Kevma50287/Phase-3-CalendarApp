import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import "../css/UserCalendar.css"
import { useState } from 'react'

const UserCalendar = ({userEvents, user, setUserEvents}) => {
    //STATE
    const initialState = {
        title:"",
        description:"",
        startDate:"",
        startTime:"",
        endDate:"",
        endTime:"",
        allDay:false
    }
    const [toggleForm, setToggleForm] = useState(false)
    const [eventDetails, setEventDetails] = useState(initialState)

    // HANDLERS
    const handleAddEvent = (e) => {
        e.preventDefault()
        const eventObj = {
            title: eventDetails.title,
            description: eventDetails.title,
            start: `${eventDetails.startDate}T${eventDetails.startTime}`,
            end: `${eventDetails.endDate}T${eventDetails.endTime}`,
            allDay: eventDetails.allDay
        }

        fetch("/events", {
            method:"POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(eventObj)
        }).then(r=>r.json())
        .then(event => {
            setUserEvents([...userEvents, event])
            fetch("/user_events", {
                method:"POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user.id,
                    event_id: event.id
                })
            }).then(r=>r.json().then(d => console.log(d)))
            .catch(err => console.log(err))
        })

    }

    const handleEventDetails = (e) => {
        const {name, value} = e.target
        setEventDetails(
            {...eventDetails, [name]:value}
        )
    }

    // FIXME:To delete console log
    console.log(eventDetails)

    const handleCancel = () => {
        setEventDetails(initialState)
        setToggleForm(false)
    }

    return (
        <div className = "userCalendarContainer">
            <FullCalendar
                className = "calendar"
                timeZone='EST'
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'addEventButton,dayGridMonth,timeGridWeek,timeGridDay'
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
                            click: () => setToggleForm(true)
                        }
                    }
                }
                
            />

            {/* TODO: Need to add CSS. Want the form to hover in the middle of the screen with a drop shadow */}
            <div style={{display: toggleForm ? 'block' : 'none' }}>
                <form id ="addEventForm" onSubmit={handleAddEvent} >
                    <h3>Add Event Details</h3>
                    <input
                        type = "text"
                        className = "eventDetailsFormInputs"
                        placeholder = "Title"
                        name = "title"
                        value = {eventDetails.title}
                        onChange = {handleEventDetails}
                    ></input>
                    <textarea
                        className = "eventDetailsFormInputs"
                        placeholder = "Add description..."
                        name = "description"
                        value = {eventDetails.description}
                        onChange = {handleEventDetails}
                    ></textarea>
                    <input
                        type = "date"
                        className = "eventDetailsFormInputs"
                        placeholder = "Enter Start Date"
                        name = "startDate"
                        value = {eventDetails.startDate}
                        onChange = {handleEventDetails}
                    ></input>
                    <input
                        type = "time"
                        className = "eventDetailsFormInputs"
                        placeholder = "Enter Start Time"
                        name = "startTime"
                        value = {eventDetails.startTime}
                        onChange = {handleEventDetails}
                    ></input>
                    <input
                        type = "date"
                        className = "eventDetailsFormInputs"
                        placeholder = "Enter End Date"
                        name = "endDate"
                        value = {eventDetails.endDate}
                        onChange = {handleEventDetails}
                    ></input>
                    <input
                        type = "time"
                        className = "eventDetailsFormInputs"
                        placeholder = "Enter End Time"
                        name = "endTime"
                        value = {eventDetails.endTime}
                        onChange = {handleEventDetails}
                    ></input>
                    <input 
                        type="checkbox" 
                        className = "eventDetailsFormInputs"
                        id="allDay" 
                        name="allDay" 
                        value={eventDetails.allDay} 
                        onChange = {handleEventDetails} /> All Day Event?
                    <button id = "addEventBtn" type="submit">Add Event</button>
                </form>
                <button id = "cancelEventBtn" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
        
    
    );
}
export default UserCalendar