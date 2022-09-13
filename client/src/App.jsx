import { Route, Switch } from "react-router-dom";
import WelcomePage from './WelcomePage';
import './App.css';
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <>
    <Switch>
    <Route exact path = "/">
        {/* <WelcomePage/> */}
        <SignUpPage />
      </Route>
    </Switch>

    </>
  );
}

export default App
