import { useState } from "react"
import "../css/SignUpPage.css"
import signUpIcon from "../logos/user.png"
import largeLogo from "../logos/largerIcon.png"
const SignUpPage = () => {
//FIXME: need to have the passed down state holding users credential for sign up veritification 
    const initialSignUpState = {
        fullname: "",
        username: "", //must be unique in DB
        email: "", //must be unique in DB
        password: "",
        confirm_password: ""
    }
    const [signUpCredentials, setSignUpCredentials] = useState(initialSignUpState)

//Event Handlers
    const handleSignUpCredentials = (e)=>{
        const{name,value} = e.target
        setSignUpCredentials(
            {...signUpCredentials,
            [name]:value}
        )
    }
    //TODO: Need to create an handler to handle sign up

    return (
        <>
        <div id = "appLogo">
            <img src = {largeLogo} alt = "logo"></img>
            <h1>DoWork</h1>
        </div>
        <div id = "signUpForm">
            <form>
                <img src = {signUpIcon} alt = "sign up page icon"></img>
                <h3>Create an Account</h3>
                <input
                    type = "text"
                    className = "userCredentialFormInputs"
                    placeHolder = "Full Name"
                    name = "fullname"
                    value = {signUpCredentials.fullname}
                    onChange = {handleSignUpCredentials}
                ></input>
                <input
                    type = "text"
                    className = "userCredentialFormInputs"
                    placeHolder = "Username"
                    name = "Username"
                    value = {signUpCredentials.username}
                    onChange = {handleSignUpCredentials}
                ></input>
                <input
                    type = "text"
                    className = "userCredentialFormInputs"
                    placeHolder = "Email Address"
                    name = "email"
                    value = {signUpCredentials.email}
                    onChange = {handleSignUpCredentials}
                ></input>
                <input
                    type = "password"
                    className = "userCredentialFormInputs"
                    placeHolder = "Password"
                    name = "password"
                    value = {signUpCredentials.password}
                    onChange = {handleSignUpCredentials}
                ></input>
                <input
                    type = "password"
                    className = "userCredentialFormInputs"
                    placeHolder = "Confirm Password"
                    name = "confirm_password"
                    value = {signUpCredentials.confirm_password}
                    onChange = {handleSignUpCredentials}
                ></input>
                <button id = "signUpBtn">Sign Up</button> {/*FIXME: Need event and event listener attached*/}
                <h4><u>Created an account? Login</u></h4>
            </form>
        </div>
        <div>
            <button className = "backToBtn">←</button>
        </div>
    </>
    )
}

export default SignUpPage