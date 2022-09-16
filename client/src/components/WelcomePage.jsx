import logo from "../logos/largerIcon.png"
import check from "../logos/check.png"
import "../css/WelcomePage.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const WelcomePage = () => {
    let navigate = useNavigate();


    const welcomeArr = ["Create your own calendar and logo.", "Collaborate with your team.", "Track goals and meet deadlines."]
    const returnWelcomeArr = welcomeArr.map((element)=>(
        <div className = "listGroup">
            <div className = "checkMark"><img src = {check} alt = "check"></img></div>
            <div className = "listGroupElement"><h4>{element}</h4></div>
        </div>
    ))
    const navigateToSignup = () => {
        navigate('/signup')
    }
    const navigateToLogin = () => {
        navigate('/login')
    }


    return (
    <>  
        <div id = "shape"></div>
        <div id = "welcomeLogoContainer">
            <div id = "logoHolder" className = "logo">
                <img src = {logo} alt = "something" height= "100px"></img>
            </div>
            <div id = "nameHolder" className = "logo">
                <h1>DoWork</h1>
            </div>
        </div>
        
        <div id = "Body">
            <div id = "largeMotto">
                <h2>Your time-management tools,
                <br />all in one place.</h2>
            </div>
            <div id = "descriptiveMotto">
                <h4 className = "missionStatement">
                    DoWork allows you and/or your team to make the most of your
                    <br /> time, by providing you a single space to handle planning, tracking,
                    <br />and coordinating.
                </h4>
            </div>
            <div id = "welcomeList">
            {returnWelcomeArr}
            </div>
            <div id = "signUpBtnContainer">
                <button className = "signUpBtn" onClick={navigateToSignup}>Sign up today!</button>
            </div>
            <div id = "loginOptionContainer">
                <h4 onClick={navigateToLogin}><u>Already signed up? Login</u></h4>
            </div>
        </div>

    </>
    )
}

export default WelcomePage