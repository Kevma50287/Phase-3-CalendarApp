import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "../css/UserCalendar.css";
import { useState } from "react";
import { useEffect } from "react";

const UserCalendar = ({ userEvents, user, setUserEvents, group }) => {
  //STATE
  const initialState = {
    id: "",
    title: "",
    description: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    allDay: false,
  };
  const [toggleForm, setToggleForm] = useState(false);
  const [eventDetails, setEventDetails] = useState(initialState);
  const groupID = () => {
    if (group) {
      return parseInt(group.split("_").pop())
    } else {
      return false
    }
  }
  // HANDLERS
  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventObj = {
      title: eventDetails.title,
      description: eventDetails.title,
      start: `${eventDetails.startDate}T${eventDetails.startTime}`,
      end: `${eventDetails.endDate}T${eventDetails.endTime}`,
      allDay: eventDetails.allDay,
    };

    fetch("/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventObj),
    })
      .then((r) => r.json())
      .then((event) => {
        setUserEvents([...userEvents, event]);
        let url = ""
        let joinerObj = {}
        if (group){
          url = "/group_events"
          joinerObj = {
            group_id: groupID(),
            event_id: event.id
          }
        } else {
          url = "/user_events"
          joinerObj = {
            user_id: user.id,
            event_id: event.id
          }
        }
        fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(joinerObj),
        })
          .then((r) => r.json().then((d) => console.log(d)))
          .catch((err) => console.log(err));
      });
  };

  const handleEventDetails = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleEventClick = (e) => {
    const editEventObj = e.event;
    console.log(editEventObj)
    const startDateAndTimeArray = e.event.startStr.split("T");
    const endDateAndTimeArray = e.event.endStr.split("T");
    setEventDetails({
      id: editEventObj.id,
      title: editEventObj.title,
      description: editEventObj.extendedProps.description,
      startDate: startDateAndTimeArray[0],
      startTime: startDateAndTimeArray[1].slice(
        0,
        startDateAndTimeArray[1].length - 1
      ),
      endDate: endDateAndTimeArray[0],
      endTime: endDateAndTimeArray[1].slice(
        0,
        endDateAndTimeArray[1].length - 1
      ),
      allDay: editEventObj.allDay,
    });
    setToggleForm("edit");
  };

  const handleEventDrag = (e) => {
    const editEventObj = e.event;
    const startDateAndTimeArray = e.event.startStr.split("T");
    const endDateAndTimeArray = e.event.endStr.split("T");
    setEventDetails({
      id: editEventObj.id,
      title: editEventObj.title,
      description: editEventObj.extendedProps.description,
      startDate: startDateAndTimeArray[0],
      startTime: startDateAndTimeArray[1].slice(
        0,
        startDateAndTimeArray[1].length - 1
      ),
      endDate: endDateAndTimeArray[0],
      endTime: endDateAndTimeArray[1].slice(
        0,
        endDateAndTimeArray[1].length - 1
      ),
      allDay: editEventObj.allDay,
    });
  };

  const handleEventDrop = (e) => {
    const editEventObj = e.event;
    const startDateAndTimeArray = e.event.startStr.split("T");
    const endDateAndTimeArray = e.event.endStr.split("T");
    const eventObj = {
      title: editEventObj.title,
      description: editEventObj.extendedProps.description,
      start: editEventObj.startStr,
      end: editEventObj.endStr,
      allDay: editEventObj.allDay,
    };
    setEventDetails({
      id: editEventObj.id,
      title: editEventObj.title,
      description: editEventObj.extendedProps.description,
      startDate: startDateAndTimeArray[0],
      startTime: startDateAndTimeArray[1].slice(
        0,
        startDateAndTimeArray[1].length - 1
      ),
      endDate: endDateAndTimeArray[0],
      endTime: endDateAndTimeArray[1].slice(
        0,
        endDateAndTimeArray[1].length - 1
      ),
      allDay: editEventObj.allDay,
    });
    fetch(`/events/${editEventObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventObj),
    })
      .then((r) => r.json())
      .then((d) => {
        const arr = userEvents.map((item) => {
          if (item.id === d.id) {
            item.start = d.start;
            item.end = d.end;
          }
          return item;
        });
        setUserEvents(arr);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const eventObj = {
      title: eventDetails.title,
      description: eventDetails.title,
      start: `${eventDetails.startDate}T${eventDetails.startTime}`,
      end: `${eventDetails.endDate}T${eventDetails.endTime}`,
      allDay: eventDetails.allDay,
    };
    
    fetch(`/events/${eventDetails.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(eventObj),
    })
      .then((r) => r.json())
      .then((d) => {
        const arr = userEvents.map((item) => {
          if (item.id === d.id) {
            item.start = d.start;
            item.end = d.end;
          }
          return item;
        });
        setUserEvents(arr);
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = (e) => {
    setEventDetails(initialState);
    setToggleForm(false);
  };

  const handleDelete = (e) => {
    let url = ""
    // FIXME:Currently just deletes the event. Need to delete the joiner first
    if (group){
      url = `/groups/${groupID()}/events/${eventDetails.id}`
    } else {
      url = `/users/1/events/${eventDetails.id}`
    }
    fetch(url, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        const newArr = userEvents.filter(
          (item) => item.id !== parseInt(eventDetails.id)
        );
        setUserEvents(newArr);
        setEventDetails(initialState);
        setToggleForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="userCalendarContainer">
      <FullCalendar
        className="calendar"
        timeZone="EST"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "addEventButton,dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        events={userEvents}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        customButtons={{
          addEventButton: {
            text: "Add Event",
            click: () => setToggleForm("add"),
          },
        }}
        eventClick={handleEventClick}
        eventDragStart={handleEventDrag}
        eventDrop={handleEventDrop}
      />

      {/* TODO: Can only CRUD events themselves right - need to devise a way of adding users and removing users from events using Admin function */}
      {/* TODO: Need to add CSS. Want the form to hover in the middle of the screen with a drop shadow */}
      <div id = "eventFormModal" style={{ display: toggleForm ? "block" : "none" }}>
        <div id="EventFormContainer">
          <form
            id = "eventForm"
            onSubmit={
              toggleForm === "add"
                ? (e) => handleAddEvent(e)
                : (e) => handleUpdateEvent(e)
            }
          >
            <h3>Event Details</h3>
            <div className = "inputLabelContainer">
              <div className = "labelContainer">
                <label>Title:&nbsp;</label>
              </div>
              <div className = "inputContainer">
                <input
                  type="text"
                  className="eventDetailsFormInputs"
                  placeholder="Title"
                  name="title"
                  value={eventDetails.title}
                  onChange={handleEventDetails}
                ></input>
              </div>
            </div>
            <div className = "inputLabelContainer">
              <div className = "labelContainer">
                <label id = "description">Description:&nbsp;</label>
              </div>
              <div className = "inputContainer">
                <textarea
                  className="eventDetailsFormInputs"
                  placeholder="Add description..."
                  name="description"
                  value={eventDetails.description}
                  onChange={handleEventDetails}
                ></textarea>
              </div>              
            </div>
            <div className = "inputLabelContainer">
              <div className = "labelContainer">
                <label>Start Date:&nbsp;</label>
              </div>
              <div className = "inputContainer">
                <input
                  type="date"
                  className="eventDetailsFormInputs"
                  placeholder="Enter Start Date"
                  name="startDate"
                  value={eventDetails.startDate}
                  onChange={handleEventDetails}
                ></input>
              </div>              
            </div>

            <div className = "inputLabelContainer">
              <div className = "labelContainer">
                <label>Start Time:&nbsp;</label>
              </div>
              <div className = "inputContainer">
                <input
                  type="time"
                  className="eventDetailsFormInputs"
                  placeholder="Enter Start Time"
                  name="startTime"
                  value={eventDetails.startTime}
                  onChange={handleEventDetails}
                ></input>
              </div>              
            </div>

            <div className = "inputLabelContainer">
              <div className = "labelContainer">
                <label>End Date:&nbsp;</label>
              </div>
              <div className = "inputContainer">
                <input
                  type="date"
                  className="eventDetailsFormInputs"
                  placeholder="Enter End Date"
                  name="endDate"
                  value={eventDetails.endDate}
                  onChange={handleEventDetails}
                ></input>
              </div>              
            </div>

            <div className = "inputLabelContainer">
              <div className = "labelContainer">
                <label>End Time:&nbsp;</label>
              </div>
              <div className = "inputContainer">
                <input
                  type="time"
                  className="eventDetailsFormInputs"
                  placeholder="Enter End Time"
                  name="endTime"
                  value={eventDetails.endTime}
                  onChange={handleEventDetails}
                ></input>
              </div>              
            </div>

            
                <label>All day?<input
                  type="checkbox"
                  className="eventDetailsFormInputs"
                  id="allDay"
                  name="allDay"
                  value={eventDetails.allDay}
                  onChange={handleEventDetails}
                />{" "}</label>

            <div id = "addEvent"><button id="EventBtn" type="submit">
              {toggleForm === "add" ? "Add Event" : "Update Event"}
            </button></div>
 
          </form>
          
          <button
            id="delEventBtn"
            onClick={handleDelete}
            style={{ display: toggleForm === "edit" ? "block" : "none" }}
          >
            Delete Event
          </button>
          <button id="cancelEventBtn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCalendar;
