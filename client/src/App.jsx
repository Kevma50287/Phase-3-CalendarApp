import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import './App.css';
import SignUpPage from "./components/SignUpPage"; //get rid of after testing
import LoginPage from "./components/LoginPage"; //get rid of after test
import MainPage from "./components/MainPage"; //get rid of after test
import GroupPage from "./components/GroupPage";


function App() {
  return (
    <>
    {/* <Routes>
      <Route path = "/" element={<WelcomePage/>}>
        
        {/* <SignUpPage /> */}
        {/* <LoginPage /> */}
        <MainPage />
      {/* </Route> */}
    {/*</Routes>*/}
    {/* <GroupPage /> */}

    </>
  );
}

export default App
