import React from "react";
import "./Manage.css"
import playstore from "../static/playstore.svg"
import appstore from "../static/appstore.svg"
import screen1 from "../static/managescreen.svg"
import screen2 from "../static/managescreen2.svg"

export default function Manage(){
    return(
        <div className="manage">
            <hr></hr>
            <div>
                <div className="manage-content">
                    <div className="manage-text">
                        <p className="manage-heading">Manage your projects from your mobile</p>
                        <p className="manage-description">Download the app to manage your projects, keep track of the progress and complete tasks without procastinating.</p>
                    </div>
                    <div className="manage-appstore">
                        <img src={playstore} alt=""/>
                        <img src={appstore} alt=""/>
                    </div>
                </div>
                <div className="manage-screen">
                    <img className="screen2" src={screen2} alt=""/>
                    <img className="screen1" src={screen1} alt=""/>
                </div>
            </div>
            
        </div>
    )
}