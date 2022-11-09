import React from "react";
import "./install2.css";
import installscreen from "../static/Mock Creative.svg";

export default function InstallSecond(){
    return(
        <div className="install2">
            <div className="install-screen2">
                <img src={installscreen} alt="screen"/>
            </div>
            <div className="intsall-contentII">
                <p className="install-text2">Doctors get medicine recommendations for each patients and keep the case history of the patient in the app.</p>
                <p className="install-description2">Doctors can get all the information with respect to the complaints of the patients when they book an appointment. 
                    App will also provide some remedy recommendations for every case. Patient records are digitally stored for future reference.</p>
            </div>
        </div>
    )
}