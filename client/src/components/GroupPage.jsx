import "../css/GroupPage.css"
import GroupCalendar from "./GroupCalendar"
import GroupTasks from "./GroupTasks"
import groupIcon from "../logos/network.png"
import smallerLogo from "../logos/smallerLogo.png"
const GroupPage = ({handleLogout}) => {

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
                    <button id = "logoutBtn" onClick={handleLogout}>Logout</button> {/*onClick={handleLogout} */}
                </div>
            </div>
            <div id="sideNavBar">
                <div id = "sideWelcomeUser">
                    <img src = {groupIcon} alt = "defaultUserLogo"></img>
                    <h2 id="welcomeGreeting">Group Name</h2> {/*FIXME: USE THE DATA GROUP NAME */}
                </div>
                <div id = "userCalendarTagsContainer">
                    <h3 className = "sideBarCat">Team Members</h3> 
                    <hr className= "underline"></hr>
                        <div className = "teamMemberContainer">
                            {/*TODO: insert the mapped array of all tags created by the user*/}
                            {/*No button to create tags. That functionality will be handle by the create event in which the user will be able to create a new tag for an event if they wish */}
                            {/*each tag should follow the format below */}
                            <ul className = "teamMember">Tsering</ul>
                            <ul className = "teamMember">Kevin</ul>
                            <ul className = "teamMember">Bob Sagget</ul>
                        </div>
                </div>
                <div id = "sideBarGroups">
                    <h3 className = "sideBarCat">Upcoming Events</h3>
                    <hr className= "underline"></hr>
                    {/*TODO: insert the mapped array of all groups that a user belongs to created by the user (we need some special way to notifying user that he created this group*/}
                    {/*TODO:Create the form to create new group*/}
                    <div className = "groupEvents"> {/*FIXME: FIX THE CLASS NAME AND ADD CSS */}
                        {/*each tag should follow the format below */}
                        
                    </div>
                </div>
            </div>
            <div id = "groupCalendarContainer">
                <GroupTasks />
                <GroupCalendar />
            </div>
        </>
            
    )
}

export default GroupPage