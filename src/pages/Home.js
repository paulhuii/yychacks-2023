import React from 'react'
import {Navigate, useNavigate} from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    const handleClickSignUp = () => {
        navigate('/createAccount')
    }
    const handleClickContinue = () => {
        navigate('/dashboard')
    }

    return (
        <div className="overlay">
            <div className="home">
                <div className="logo-container">
                </div>
                <h1>Be a Part of Reinvigorating Calgary as a Winter City Destination!</h1>

                <button className="continue-button" onClick={handleClickContinue}>
                    CONTINUE
                </button>
                <button className="signUp-button" onClick={handleClickSignUp}>
                    SIGN UP
                </button>


            </div>
        </div>
    )
}

export default Home