import React from "react";
import './install.css'
import installscreen from "../static/MockCreative.svg"

export default function Install(){
    return(
            <div className="install">
                <div className="intsall-content">
                    <p className="install-text">Patients doesn't have to spend more time in clinic anymore.</p>
                    <p className="install-description">Patients can book an appointment for a doctor and enter the diseases symptoms in the app itself while booking an appointment. It helps the doctor to figure out the remedy even before you visit the doctor and this reduces the time for a new case to 15-20 mins from 45-60 mins.</p>
                </div>
                <div className="install-screen">
                    <img src={installscreen} alt="screen"/>
                </div>
            </div>
        
    )

}