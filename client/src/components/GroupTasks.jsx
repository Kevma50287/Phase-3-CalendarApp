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
                <div className = "taskCard"></div>
                <div id = "taskForm" className = "taskCard"></div>
                <div id = "taskForm" className = "taskCard"></div>
            </div>
        </div>
    )
}