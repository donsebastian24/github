import React from "react";
import './Content.css'
import phone from '../static/iPhone X.png'
import appstore from '../static/appstore.svg'
import playstore from '../static/playstore.svg'

const Content = () =>{
    return(
        <div className="body" id="content">
            <div className="content">
                <p className="c-text">Get cured with best Homoeopathic Doctors!</p>
                <p className="description">Homoeomend app allows patients to pre-book for a doctor at convenient time instead of waiting in the clinic for a long time.</p>
                <div className="right-nav">
                    <img src={playstore} alt="playstore"/>
                    <img src={appstore} alt="appstore"/>
                </div>
            </div>
            <div className="phone">
                <img src={phone} alt='phone'/>
            </div>
        </div>
    );
}
export default Content