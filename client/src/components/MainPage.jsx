import "../css/MainPage.css"
import UserCalendar from "./UserCalendar"
import { useState, useEffect } from "react"
import loggedInUserIcon from "../logos/loggedinuser.png"
import smallerLogo from "../logos/smallerLogo.png"
import { Outlet } from "react-router-dom"
const MainPage = ({onLogout}) => {
    const[userEvents, setUserEvents] = useState ([])

    useEffect(()=>{
        fetch("/users/1/events")
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
                <div id = "smallLogoContainer">
                    <img id = "smallLogo" src = {smallerLogo} alt = "small logo"></img>
                </div>
                <div id = "smallNameContainer">
                    <h5 id = "smallName">DoWork</h5>
                </div>
                <div id = "logoutBtnContainer">
                    <button id = "logoutBtn" onClick={handleLogout}>Logout</button>
                </div>
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
                            {/*TODO: insert the mapped array of all tags created by the user*/}
                            {/*No button to create tags. That functionality will be handle by the create event in which the user will be able to create a new tag for an event if they wish */}
                            {/*each tag should follow the format below */}
                            <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Holidays</label></ul>
                            <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>School</label></ul>
                            <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Work</label></ul>
                        </div>
                </div>
                <div id = "sideBarGroups">
                    <h3 className = "sideBarCat">Groups</h3>
                    <hr className= "underline"></hr>
                    {/*TODO: insert the mapped array of all groups that a user belongs to created by the user (we need some special way to notifying user that he created this group*/}
                    {/*TODO:Create the form to create new group*/}
                    <div id = "userTags"> {/*FIXME: FIX THE CLASS NAME AND ADD CSS */}
                        {/*each tag should follow the format below */}
                        <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Holidays</label></ul>
                        <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>School</label></ul>
                        <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Work</label></ul>
                    </div>
                </div>
            </div>
            {/* TODO: This is where GroupTasks will appear */}
            <div>
                <Outlet />
            </div>
            <div id = "calendarContainer">
                <UserCalendar userEvents = {userEvents}/>
            </div>
        </>
    )
}

export default MainPage