import React from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import calgary from "../videos/calgary.mp4"

const Home = () => {

    const navigate = useNavigate()

    const handleClickSignUp = () => {
        navigate('/createAccount')
    }
    const handleClickContinue = () => {
        navigate('/dashboard')
    }

    return (
        <div>
            <video src={calgary} autoPlay loop muted/>

            <div className="overlay">
                <h1 className="calgary">COME YYSEE</h1>
                <button id="signUp-button" onClick={handleClickSignUp}>SIGN UP</button>
                <button id="continue-button" onClick={handleClickContinue}>CONTINUE</button>


        </div>
        </div>



    )
}

export default Home