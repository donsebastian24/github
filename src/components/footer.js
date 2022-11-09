import React from "react";
import './Footer.css'
import flogo from '../static/flogo.svg'



const Footer = () => {
    return(
        <>
            <div className="footer"> 
                <div className="company-info">
                    <img className="flogo" src={flogo} alt="logo"/>
                    <p className="copyright">© 2021 Appmend Inc. All rights reserved</p>
                    <div className="sociallinks">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-solid fa-globe"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="links">
                    <div className="main-col">
                    <div className="col1">
                        <p className="list-heading">Company</p>
                        <ul>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                        </ul>
                    </div> 
                    <div className="col2">
                        <p className="list-heading">Support</p>
                        <ul>
                            <li>Help Center</li>
                            <li>Terms of service</li>
                            <li>Legal</li>
                            <li>Privacy Policy</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    </div>
                    
                    <div className="col3">
                        <p className="list-heading">Stay up to date</p>
                        <form>
                            <input placeholder="Your email address"/>
                            <button><i class="fa-solid fa-paper-plane"></i></button>
                        </form>

                    </div>
                </div>
            </div>      
        </>
    )
}

export default Footer