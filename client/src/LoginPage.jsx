import { useState } from "react"
import "./LoginPage.css"
import largeLogo from "./logos/largerIcon.png"
import signUpIcon from "./logos/user.png"

import loginIcon from "./logos/user.png"
const LoginPage = () => {
//FIXME: need to have the passed down state holding users credential for sign up veritification 

//States
    const initialLoginState = {
        username: "",
        password: ""
    }
    const[loginCredentials,setLoginCredentials] = useState ([])
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

    <div id = "loginForm">
        <form>
            <img src = {loginIcon}></img>
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
                <button id = "loginBtn" onSubmit = {handleLogin}>Login</button> {/*FIXME: Need event and event listener attached*/}
                <h4><u>Create an account for free!</u></h4>
        </form>
    </div>
    <div id = "appLogo">
        <img src = {largeLogo} alt = "logo"></img>
        <h1>DoWork</h1>
    </div>
    </>

    )
}