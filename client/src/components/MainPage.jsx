import "../css/MainPage.css"
import UserCalendar from "./UserCalendar"
import { useState, useEffect } from "react"
import loggedInUserIcon from "../logos/loggedinuser.png"
import smallerLogo from "../logos/smallerLogo.png"
const MainPage = ({onLogout}) => {
    const[userEvents, setUserEvents] = useState ([])

    useEffect(()=>{
        fetch("/users/10/events")
        .then (r=>r.json())
        .then (userEventData => setUserEvents(userEventData))
    },[])

    console.log(userEvents)

    const handleLogout = (e) => {
        fetch('/logout', {
            method: "DELETE",
        }).then(()=>onLogout())
    }

    return(
        <>
            <div id = "header">
                <div id = "logoHolder">
                    <img src = {smallerLogo}></img>
                    <h5>DoWork</h5>
                </div>
                <button id = "logoutBtn" onClick={handleLogout}>Logout</button>
            </div>
            <div id="sideNavBar">
                <div id = "sideWelcomeUser">
                    <img src = {loggedInUserIcon} alt = "defaultUserLogo"></img>
                    <h2 id="welcomeGreeting">Hello, Bobby Infanto Valeinte!</h2>
                </div>
                <div id = "userCalendarTagsContainer">
                    <h3 className = "sideBarCat">Tags</h3> 
                    <hr className= "underline"></hr>
                        <div id = "userTags">
                            <ul><label><input type = "checkBox" className = "checkBox"></input>Holidays</label></ul>
                            <ul><label><input type = "checkBox" className = "checkBox"></input>Holidays</label></ul>
                            <ul><label><input type = "checkBox" className = "checkBox"></input>Holidays</label></ul>
                        </div>
                    {/*TODO: insert the mapped array of all tags created by the user*/}
                    {/*No button to create tags. That functionality will be handle by the create event in which the user will be able to create a new tag for an event if they wish */}
                </div>
                <div id = "sideBarGroups">
                    <h3 className = "sideBarCat">Groups</h3>
                    <hr className= "underline"></hr>
                    {/*TODO: insert the mapped array of all groups that a user belongs to created by the user (we need some special way to notifying user that he created this group*/}
                    {/*TODO:Create the form to create new group*/}
                </div>
            </div>
            <div id = "calendarContainer">
                <UserCalendar userEvents = {userEvents}/>
            </div>
        </>
    )
}

export default MainPage