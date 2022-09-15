import { useState } from "react"
import "../css/LoginPage.css"
import largeLogo from "../logos/largerIcon.png"
import loginIcon from "../logos/user.png"

const LoginPage = () => {
//FIXME: need to have the passed down state holding users credential for sign up veritification 

//States
    const initialLoginState = {
        username: "",
        password: ""
    }
    const[loginCredentials,setLoginCredentials] = useState (initialLoginState)
//Handlers
    //TODO: create the login check
    const handleLogin = ()=>{

    }
    const handleLoginCredentials = (e)=>{
        const{name,value} = e.target
        setLoginCredentials(
            {...loginCredentials,
            [name]:value}
        )
    }
    return(
    <>
    <div id = "loginBackground">
        <div id = "loginFormContainer">
            <form id = "loginForm">
                <img src = {loginIcon} alt = "large icon"></img>
                <h3>Enter Credentials</h3>
                    <input
                        type = "text"
                        className = "userCredentialFormInputs"
                        placeHolder = "Username"
                        name = "Username"
                        value = {loginCredentials.username}
                        onChange = {handleLoginCredentials}
                    ></input>
                    <input
                        type = "password"
                        className = "userCredentialFormInputs"
                        placeHolder = "Password"
                        name = "password"
                        value = {loginCredentials.password}
                        onChange = {handleLoginCredentials}
                    ></input>
                    <button id = "loginBtn" onSubmit = {handleLogin}>Login</button> {/*TODO: Need event and event handler attached*/}
                    <h4><u>Create an account for free!</u></h4> {/*TODO: Need event and event handler to redirect to login page*/}
            </form>
        </div>
    </div>
    <div id = "logoContainer">
        <img src = {largeLogo} alt = "logo"></img>
        <h1>DoWork</h1>
    </div>
    </>

    )
}

export default LoginPage