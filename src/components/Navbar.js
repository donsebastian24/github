import React from "react";
import { useState } from "react";
import './Navbar.css'
import logo from '../static/homoeomend-Logo-Typo.svg'

const Navbar = () =>{

    const [showItems, setShowItems] = useState(false)
    const [navbar,setnavbar] = useState(false)
    const changeBackground = () =>{
        if(window.scrollY >=72){
            setnavbar(true)
        }else{
            setnavbar(false)
        }
    }
    window.addEventListener('scroll',changeBackground)
    return(
        <>
            <div className="header">
                <nav className={navbar ? 'navbar active':'navbar'}>
                    <img className="logo" src ={logo} alt="logo"/>
                    <div className="nav-items" >
                        <ul id={showItems ? "hidden":"hidden1"}>
                            <li><a href="#content">About</a></li>
                            <li><a href="#steps">Products</a></li>
                        </ul>
                        <button onClick={() => setShowItems(!showItems)}><i class="fa-solid fa-bars"></i></button>
                    </div>
                    
                    
                </nav>
                {/* <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid d-flex flex-row justify-content-between ">
                        <img className="logo" src ={logo} alt="logo"/>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav-items navbar-nav ">
                                <li className="nav-item" >About</li>
                                <li className="nav-item">Products</li>
                                <li className="nav-item">Blog</li>
                                <li className="nav-item">Careers</li>
                            </ul>
                        </div>
                        
                    </div>
                </nav> */}

            </div>
            
        </>
        
    );
}

export default Navbar