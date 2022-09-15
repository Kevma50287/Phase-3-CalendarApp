import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import './App.css';
import SignUpPage from "./components/SignUpPage"; //get rid of after testing
import LoginPage from "./components/LoginPage"; //get rid of after test
import MainPage from "./components/MainPage"; //get rid of after test
import UserCalendar from "./components/UserCalendar";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  // useState to hold user information
  const [user, setUser] = useState(null)

  // Check
  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then(r => r.json())
    .then(user => setUser(user))
    .catch(err => console.log(err))
  },[])

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <>
    <Routes>
      <Route path = "/" element={<WelcomePage/>}/>
      <Route path = "signup" element={<SignUpPage onSignup={handleLogin} />}/>
      <Route path = "login" element={<LoginPage onLogin={handleLogin}/>}/>

    </Routes>
    </>
  );
}

export default App
