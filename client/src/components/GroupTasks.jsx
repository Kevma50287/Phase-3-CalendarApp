import "../css/GroupTasks.css"
import { useState } from "react"
export default function GroupTasks () {
    const [toggleCollapse, setToggleCollapse] = useState(true)
    function handleToggleTasks(){
        const hide = !toggleCollapse
        setToggleCollapse(hide)
    }

    return (
        <div id = "groupTask" style = {toggleCollapse? {"margin-top": "32%"}: {"margin-top": "15%"}}>
            <button id = "collapsible" onClick = {handleToggleTasks}>Group Tasks</button>
            <div id = {toggleCollapse ? "groupTaskContainerShow" : "groupTaskContainerHide"}>
                <div id = "taskFormContainer" className = "taskCard">
                    <form id = "taskForm">
                        <input className = "taskFormTitle" type = "text" placeholder="Task Title"></input>
                        <input className = "taskFormDescription" type = "text" placeholder = "Task Description"></input>
                        <input className = "taskFormStartDate" type = "date" placeholder="Start Date"></input>
                        <input className = "taskFormEndDate"type = "date" placeHolder="End Date"></input>
                        <button>Add task</button>
                    </form>
                </div>
                <div id = "taskFormContainer" className = "taskCard">
                    <form id = "taskForm">
                        <input className = "taskFormTitle" type = "text" placeholder="Task Title"></input>
                        <input className = "taskFormDescription" type = "text" placeholder = "Task Description"></input>
                        <input className = "taskFormStartDate" type = "date" placeholder="Start Date"></input>
                        <input className = "taskFormEndDate"type = "date" placeHolder="End Date"></input>
                        <button>Add task</button>
                    </form>
                </div>
                <div className = "taskCard">
                    <div className = "task">
                        <h7>Some Task Title</h7>
                        <h8>Start Date: 12/06/2023</h8>
                        <h8>End Date: 12/08/2023</h8>
                        <p>akjsdhfaksjdfhalksdjfhalksdjfhalksjdhfaskljdfhaskldjfhasdkljfhasdlkfjahsdflkajsdhfa</p>

                    </div>
                </div>
            </div>
        </div>
    )
}