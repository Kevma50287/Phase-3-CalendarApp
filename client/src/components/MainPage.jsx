import "../css/MainPage.css"
const MainPage = () => {

    return(
        <>
            <div id="sideNavBar">
                <div id = "sideWelcomeUser">
                    <img src = ""></img>
                    <h3>Hello, `${"insert state that's holding the array"}`</h3> {/*FIXME: need to insert the state holding user info */}
                </div>
                <div id = "calendarTags">
                    <h3>Tags</h3> 
                    {/*TODO: insert the mapped array of all tags created by the user*/}
                    {/*No button to create tags. That functionality will be handle by the create event in which the user will be able to create a new tag for an event if they wish */}
                </div>
                <div id = "sideBarGroups">
                    <h3>Groups</h3>
                    {/*TODO: insert the mapped array of all groups that a user belongs to created by the user (we need some special way to notifying user that he created this group*/}
                    {/*TODO:Create the form to create new group*/}
                </div>
            </div>
            <div id = "calendarContainer">
                <div id = "viewingOptionBar">
                    <h1>{/*Insert the value of current month of what is being viewed*/}September 2022</h1>
                    <button class = "viewOption">Previous</button> {/*FIXME: Needs event/handler. Needs a way for it to know whether in daily,weekly,or monthly */}
                    <button class = "viewOption">Daily</button>{/*FIXME: Needs event/handler. Will change the state of the current viewing option. Default will be monthly */}
                    <button class = "viewOption">Weekly</button>{/*FIXME: Needs event/handler. Will change the state of the current viewing option. Default will be monthly */}
                    <button class = "viewOption">Monthly</button>{/*FIXME: Needs event/handler. Will change the state of the current viewing option. Default will be monthly */}
                    <button class = "viewOption">Next</button>{/*FIXME: Needs event/handler. Needs a way for it to know whether in daily,weekly,or monthly */}
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default MainPage