import React from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'


function Landing() {
    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Your platform for online studying</h2>
            </div>

            <img src={landingImg} alt="study platform"/>
            <div className="buttons-container">
                <a href="" className="study">
                    <img src={studyIcon} alt="study"/>
                    Study
                </a>
                <a href="" className="give-classes">
                    <img src={giveClassIcon} alt="study"/>
                    Study
                </a>
            </div>

            <span className="total-connections">
                Total of 200 connections <img src={purpleHeartIcon} alt="heart icon"/>
            </span>
        </div>
    </div>
    )
}

export default Landing;