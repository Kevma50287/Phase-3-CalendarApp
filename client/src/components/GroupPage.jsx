import "../css/MainPage.css"
import GroupCalendar from "./GroupCalendar"
import GroupTasks from "./GroupTasks"
import GroupLogo from "../logos/network.png"
import smallerLogo from "../logos/smallerLogo.png"
const GroupPage = () => {
//FIXME: NEED handleLogout passed down

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
                    <button id = "logoutBtn">Logout</button> {/*FIXME: ONCE handleLogout is passed down add the onClick = {handleLogout} */}
                </div>
            </div>
            <div id="sideNavBar">
                <div id = "sideWelcomeUser">
                    <img src = {GroupLogo} alt = "group logo"></img>
                    <h2 id="welcomeGreeting">GROUP NAME</h2>
                </div>
                <div id = "userCalendarTagsContainer">
                    <h3 className = "sideBarCat">Team Members</h3> 
                    <hr className= "underline"></hr>
                        <div id = "userTags">
                            {/*TODO: insert the mapped array of all tags created by the user*/}
                            {/*No button to create tags. That functionality will be handle by the create event in which the user will be able to create a new tag for an event if they wish */}
                            {/*each tag should follow the format below */}
                            <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Kevin</label></ul> {/*TODO: REMOVE ME*/}
                            <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Tsering</label></ul> {/*TODO: REMOVE ME*/}
                            <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Bob</label></ul> {/*TODO: REMOVE ME*/}
                        </div>
                </div>
                <div id = "sideBarGroups">
                    <h3 className = "sideBarCat">Tags</h3>
                    <hr className= "underline"></hr>
                    {/*TODO: insert the mapped array of all groups that a user belongs to created by the user (we need some special way to notifying user that he created this group*/}
                    {/*TODO:Create the form to create new group*/}
                    <div id = "userTags"> {/*FIXME: FIX THE CLASS NAME AND ADD CSS */}
                        {/*each tag should follow the format below */}
                        <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Meetings</label></ul> {/*TODO: REMOVE ME*/}
                        <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Code Reviews</label></ul> {/*TODO: REMOVE ME*/}
                        <ul className = "checkBox"><label><input type = "checkBox" className = "checkBoxInput"></input>Deadlines</label></ul> {/*TODO: REMOVE ME*/}
                    </div>
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