import "../css/MainPage.css"
import GroupCalendar from "./GroupCalendar"
import GroupTasks from "./GroupTasks"
const GroupPage = () => {

    return(
        <>
            <div id = "header"></div>
            <div id="sideNavBar">
                <div id = "sideWelcomeUser">
                    <img src = ""></img>
                    <h3>GROUP NAME</h3> {/*FIXME: need to insert the state holding user info */}
                </div>
                <div id = "calendarTags, groupCalendarTags" >
                    <h3>Tags</h3> 
                    {/*TODO: insert the mapped array of all group tags created*/}
                    {/*No button to create tags. That functionality will be handle by the create event in which the user will be able to create a new tag for an event if they wish */}
                </div>
                <div id = "sideBarGroups">
                    <h3>Team Members</h3>
                    {/*TODO: insert the mapped array of all groups members*/}
                </div>
            </div>
            <div id = "calendarContainer">
                <GroupTasks />
                <GroupCalendar />
            </div>
        </>
    )
}

export default GroupPage