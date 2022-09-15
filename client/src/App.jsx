import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import './App.css';
import SignUpPage from "./components/SignUpPage"; //get rid of after testing
import LoginPage from "./components/LoginPage"; //get rid of after test
import MainPage from "./components/MainPage"; //get rid of after test
import UserCalendar from "./components/UserCalendar";


function App() {
  return (
    <>
    <Switch>
    <Route exact path = "/">
        {/* <WelcomePage/> */}
        <SignUpPage />
        {/* <LoginPage /> */}
        {/* <MainPage /> */}
        {/* <UserCalendar/> */}
      </Route>
    </Switch>

    </>
  );
}

export default App
