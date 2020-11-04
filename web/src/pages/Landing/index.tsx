import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'


function Landing() {

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            console.log(response);
            const {total} = response.data
            setTotalConnections(total);
        })
    }, [])
    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Your platform for online studying</h2>
            </div>

            <img src={landingImg} alt="study platform" className="hero-image"/>
            <div className="buttons-container">
                <Link to="/study" className="study">
                    <img src={studyIcon} alt="study"/>
                    Study
                </Link>
                <Link to="/give-classes" className="give-classes">
                    <img src={giveClassIcon} alt="Give classes"/>
                    Give classes
                </Link>
            </div>

            <span className="total-connections">
                Total of {totalConnections} connections <img src={purpleHeartIcon} alt="heart icon"/>
            </span>
        </div>
    </div>
    )
}

export default Landing;