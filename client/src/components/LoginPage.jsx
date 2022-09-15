import { useState } from "react"
import "../css/LoginPage.css"
import largeLogo from "../logos/largerIcon.png"
import loginIcon from "../logos/user.png"

const LoginPage = ({onLogin}) => {
//FIXME: need to have the passed down state holding users credential for sign up veritification 

//States
    const initialLoginState = {
        username: "",
        password: ""
    }
    const[loginCredentials,setLoginCredentials] = useState (initialLoginState)
//Handlers
    //TODO: create the login check
    const handleLogin = (e)=>{
        e.preventDefault()
        fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(loginCredentials)
        }).then(r=>r.json())
        .then(user => {
            if (user["error"]){
                console.log(user["error"])
            } else {
                onLogin(user)
            }
        }).catch(err=>console.log(err))
    }

    const handleLoginCredentials = (e)=>{
        const{name,value} = e.target
        setLoginCredentials(
            {...loginCredentials,
            [name]:value}
        )
    }
    console.log(loginCredentials)
    return(
    <>
    <div id = "loginBackground">
        <div id = "loginFormContainer">
            <form id = "loginForm" onSubmit = {handleLogin}>
                <img src = {loginIcon} alt = "large icon"></img>
                <h3>Enter Credentials</h3>
                    <input
                        type = "text"
                        className = "userCredentialFormInputs"
                        placeholder = "Username"
                        name = "username"
                        value = {loginCredentials.username}
                        onChange = {handleLoginCredentials}
                    ></input>
                    <input
                        type = "password"
                        className = "userCredentialFormInputs"
                        placeholder = "Password"
                        name = "password"
                        value = {loginCredentials.password}
                        onChange = {handleLoginCredentials}
                    ></input>
                    <button id = "loginBtn" type='submit'>Login</button> 
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