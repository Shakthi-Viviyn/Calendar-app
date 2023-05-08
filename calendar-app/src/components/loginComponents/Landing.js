import React from 'react';
import '../../styles/landing.scss'
import NavBar from './NavBar'

export default function Landing(){

    return (
        <div className="landing-page-container">
            <NavBar/>
            <div className="main-container">
                <div className="text-container">
                    <h1>Ace your exams..<span>!</span></h1>
                    <h3>Plan anything with ease</h3>
                </div>
            </div>
            {/* <div className="graphic"/> */}
        </div>
    )
}