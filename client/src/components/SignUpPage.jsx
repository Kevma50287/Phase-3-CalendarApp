import { useState } from "react"
import "../css/SignUpPage.css"
import signUpIcon from "../logos/user.png"
import largeLogo from "../logos/largerIcon.png"

const SignUpPage = ({onLogin}) => {
//FIXME: need to have the passed down state holding users credential for sign up veritification 
    const initialSignUpState = {
        full_name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
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
    const handleSignUp = (e) => {
        fetch("http://localhost:3000/signup", {
            method:"POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(signUpCredentials)
        }).then(r=>{
            if (r.ok){
                r.json()
            }
        }).then(data => onLogin(data))
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <div id = "logoContainer">
            
                <img src = {largeLogo} alt = "logo"></img>
                <h1>DoWork</h1>
            
        </div>
        <div id = "signUpBackground">
            <div id = "signUpFormContainer">
                <form id = "signUpForm">
                    <img src = {signUpIcon} alt = "sign up page icon"></img>
                    <h3>Create an Account</h3>
                    <input
                        type = "text"
                        className = "userCredentialFormInputs"
                        placeholder = "Full Name"
                        name = "full_name"
                        value = {signUpCredentials.full_name}
                        onChange = {handleSignUpCredentials}
                    ></input>
                    <input
                        type = "text"
                        className = "userCredentialFormInputs"
                        placeholder = "Username"
                        name = "username"
                        value = {signUpCredentials.username}
                        onChange = {handleSignUpCredentials}
                    ></input>
                    <input
                        type = "text"
                        className = "userCredentialFormInputs"
                        placeholder = "Email Address"
                        name = "email"
                        value = {signUpCredentials.email}
                        onChange = {handleSignUpCredentials}
                    ></input>
                    <input
                        type = "password"
                        className = "userCredentialFormInputs"
                        placeholder = "Password"
                        name = "password"
                        value = {signUpCredentials.password}
                        onChange = {handleSignUpCredentials}
                    ></input>
                    <input
                        type = "password"
                        className = "userCredentialFormInputs"
                        placeholder = "Confirm Password"
                        name = "password_confirmation"
                        value = {signUpCredentials.password_confirmation}
                        onChange = {handleSignUpCredentials}
                    ></input>
                    <button id = "signUpBtn" onClick={handleSignUp}>Sign Up</button>
                    <h4><u>Created an account? Login</u></h4>
                </form>
            </div>
            {/*FIXME: uncomment and needs event/handler <button className = "backToBtn">←</button> */} 
        </div>
    </>
    )
}

export default SignUpPage