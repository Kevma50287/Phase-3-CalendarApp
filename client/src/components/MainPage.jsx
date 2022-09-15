import "../css/MainPage.css"
import UserCalendar from "./UserCalendar"
import { useState, useEffect } from "react"
import loggedInUserIcon from "../logos/loggedinuser.png"
const MainPage = () => {
    const[userEvents, setUserEvents] = useState ([])


    useEffect(()=>{
        fetch("http://127.0.0.1:3000/users/10/events")
        .then (r=>r.json())
        .then (userEventData => setUserEvents(userEventData))
    },[])

    console.log(userEvents)
    return(
        <>
            <div id = "header">
                <button>Logout</button>
            </div>
            <div id="sideNavBar">
                <div id = "sideWelcomeUser">
                    <img src = {loggedInUserIcon} alt = "defaultUserLogo"></img>
                    <h2 id="welcomeGreeting">Hello, Bobby Infanto Valeinte!</h2>
                </div>
                <div id = "calendarTags">
                    <h3 className = "sideBarCat">Tags</h3> 
                    {/*TODO: insert the mapped array of all tags created by the user*/}
                    {/*No button to create tags. That functionality will be handle by the create event in which the user will be able to create a new tag for an event if they wish */}
                </div>
                <div id = "sideBarGroups">
                    <h3 className = "sideBarCat">Groups</h3>
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