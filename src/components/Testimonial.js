import React from "react";
import "./Testimonial.css"
import quote from "../static/Quote Mark.svg"
import thumbnail from "../static/Video Thumbnail.svg"

export default function Testimonial(){
    return(
        <div className="testimonial">
            <div className="testimonial-heading">
                <div className="test-text">
                    <p className="test-heading">Trying is Believing</p>
                    <p className="test-description">See what people are saying about our unique and effective formulas.</p>
                </div>
                {/* <div className="quote">
                    <img src={quote} alt="quote"/>
                </div> */}
            </div>
            
            <div className="testimonial-videos">
                <div className="video1">
                    <img src={thumbnail} alt="thumbanil"/>
                    <div className="video-text">
                        <p className="video-heading">Review by Michelle Hyatt</p>
                        <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, sit imperdiet risus, venenatis at.</p>
                    </div>
                </div>
                <div className="video1">
                    <img src={thumbnail} alt="thumbanil"/>
                    <div className="video-text">
                        <p className="video-heading">Review by Michelle Hyatt</p>
                        <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, sit imperdiet risus, venenatis at.</p>
                    </div>
                </div>
                <div className="video1">
                    <img src={thumbnail} alt="thumbanil"/>
                    <div className="video-text">
                        <p className="video-heading">Review by Michelle Hyatt</p>
                        <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, sit imperdiet risus, venenatis at.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}