import React from "react";
import "./Home.css"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

export default function Home(){
    return(
        <section className="Body">
            <Navbar/>
            <Content/>
        </section>
    )
}