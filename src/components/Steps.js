import React from "react";
import "./Steps.css"
import phone from "../static/Phone Mockup.svg"
import patientcircle from "../static/Feature Icon with circle.svg"
import doctorcircle from "../static/Feature Icon with circle.svg"

export default function Steps(){
    return(
        <div className="steps" id="steps">
            <div className="steps-content">
                <div className="steps-heading">
                    <p >Install the app in few easy steps.</p>
                    <img src={phone} alt="phone"/>
                </div>
                <div className="steps-types">
                    <div className="patients">
                        <img src={patientcircle} alt=""/>
                        <div className="">
                            <p className="type-heading">FOR <b>PATIENTS</b></p>
                            <p className="type-description">Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.</p>
                        </div>
                    </div>
                    <div className="doctors">
                        <img src={doctorcircle} alt=""/>
                        <div >
                            <p className="type-heading">FOR <b>DOCTORS</b></p>
                            <p className="type-description">Connect the device anywhere your home and turn it on. Then follow the guide given by the app to configure. Make sure your home WiFi is working well..</p>
                        </div>
                        
                    </div>

                </div>

            </div>
            
        </div>
    )
}