import "../css/MainPage.css";
import UserCalendar from "./UserCalendar";
import { useState, useEffect } from "react";
import loggedInUserIcon from "../logos/loggedinuser.png";
import smallerLogo from "../logos/smallerLogo.png";
import { Outlet, useNavigate, useParams } from "react-router-dom";
const MainPage = ({ onLogout, user }) => {
  const navigate = useNavigate();
  const [userEvents, setUserEvents] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const initialState = {
    title: "",
  };
  const [groupInputs, setGroupInputs] = useState(initialState);
  // TODO: Add Tasks
  const [userTasks, setUserTasks] = useState([]);
  const { group_id } = useParams();
  useEffect(() => {
    fetch("/users/1/events")
      .then((r) => r.json())
      .then((userEventData) => setUserEvents(userEventData));

    fetch("/users/1/groups")
      .then((r) => r.json())
      .then((userGroupData) => setUserGroups(userGroupData));

    fetch("/users/1/tasks")
      .then((r) => r.json())
      .then((userTaskData) => setUserTasks(userTaskData));
  }, []);

  useEffect(() => {
    const paramID = parseInt(group_id?.split("_").pop());
    if (paramID) {
      fetch(`/groups/${paramID}/events`)
        .then((r) => r.json())
        .then((userEventData) => {
          console.log(userEventData);
          setUserEvents(userEventData);
        });
    }
  }, [group_id]);

  console.log(userEvents);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupInputs({ ...groupInputs, [name]: value });
  };

  const handleLogout = (e) => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/groups", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(groupInputs),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(userGroups)
        setUserGroups([...userGroups, data])
        fetch("/group_joiners", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
            group_id: data.id,
          }),
        });
      });
  };

  const GroupList = userGroups.map((item) => (
    <li
      className="checkBox groupList"
      onClick={() => navigate(`/users/${item.title}_${item.id}`)}
    >
      {item.title}
    </li>
  ));

  return (
    <>
      <div id="header">
        <div id="smallLogoContainer">
          <img id="smallLogo" src={smallerLogo} alt="small logo"></img>
        </div>
        <div id="smallNameContainer">
          <h5 id="smallName">DoWork</h5>
        </div>
        <div id="logoutBtnContainer">
          <button id="logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div id="sideNavBar">
        <div id="sideWelcomeUser">
          <img src={loggedInUserIcon} alt="defaultUserLogo"></img>
          <h2 id="welcomeGreeting">
            {user ? `Hello, ${user.username}!` : "Getting Info..."}
          </h2>
        </div>
        <div id="userCalendarTagsContainer">
          <h3 className="sideBarCat">Tags</h3>
          <hr className="underline"></hr>
          <div className="userTags">
            {/*TODO: insert the mapped array of all tags created by the user*/}
            {/*No button to create tags. That functionality will be handle by the create event in which the user will be able to create a new tag for an event if they wish */}
            {/*each tag should follow the format below */}
            <ul className="checkBox">
              <label>
                <input type="checkBox" className="checkBoxInput"></input>
                Holidays
              </label>
            </ul>
            <ul className="checkBox">
              <label>
                <input type="checkBox" className="checkBoxInput"></input>School
              </label>
            </ul>
            <ul className="checkBox">
              <label>
                <input type="checkBox" className="checkBoxInput"></input>Work
              </label>
            </ul>
          </div>
        </div>
        <div id="sideBarGroups">
          <h3 className="sideBarCat">Groups</h3>
          <hr className="underline"></hr>
          {/*TODO: insert the mapped array of all groups that a user belongs to created by the user (we need some special way to notifying user that he created this group*/}
          {/*TODO:Create the form to create new group*/}
          <div className="userGroups">
            {" "}
            {/*FIXME: FIX THE CLASS NAME AND ADD CSS */}
            {/*each tag should follow the format below */}
            <button className="">Join Group</button>
            <button className="" onClick={(e) => setToggleForm((b) => !b)}>
              Create Group
            </button>
            {/* TODO: Add group functionality */}
            <div
              id="groupFormContainer"
              style={{ display: toggleForm ? "block" : "none" }}
            >
              <form id="groupForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="eventDetailsFormInputs"
                  placeholder="Enter Group Name"
                  name="title"
                  value={groupInputs.title}
                  onChange={handleChange}
                ></input>
              </form>
            </div>
            {GroupList}
          </div>
        </div>
      </div>
      <div>
        {/* TODO: This Outlet is where GroupTasks will appear */}
        <Outlet handleLogout={handleLogout} />
      </div>
      <div id="calendarContainer">
        <UserCalendar
          userEvents={userEvents}
          user={user}
          setUserEvents={setUserEvents}
          group={group_id}
        />
      </div>
    </>
  );
};

export default MainPage;
