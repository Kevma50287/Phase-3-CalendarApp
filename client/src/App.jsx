import { Route, Routes, useNavigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import './App.css';
import SignUpPage from "./components/SignUpPage"; //get rid of after testing
import LoginPage from "./components/LoginPage"; //get rid of after test
import MainPage from "./components/MainPage"; //get rid of after test
import UserCalendar from "./components/UserCalendar";
import { useState } from "react";
import { useEffect } from "react";
import GroupTasks from "./components/GroupTasks";


function App() {
  // useState to hold user information
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // On initial load, will check to see if user is logged in through the sessions cookie
  useEffect(() => {
    fetch("/me")
    .then(r => r.json())
    .then(user => {
      if (user["error"]){
        console.log(user)
      } else {
        setUser(user)
      }
    })
    .catch(err => console.log(err))
  },[])

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  //if user is in session we go to /users
  user || navigate('/users')

  return (
    <>
    <Routes>
      <Route path = "/" element= {<WelcomePage/>}/>
      <Route path = "/signup" element={<SignUpPage onSignup={handleLogin} />}/>
      <Route path = "/login" element={<LoginPage onLogin={handleLogin}/>}/>
      <Route path = '/users' element= {<MainPage onLogout={handleLogout}/>} >
        <Route path = '/group'>
          <Route path = ":group_id" element={<GroupTasks/>}/>
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App
