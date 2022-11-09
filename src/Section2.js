import React from "react";
import Install from "./components/install";
import InstallSecond from "./components/Install2";




import "./Section2.css"

export default function Section2(){
    return(
        <section className="section2">
            <Install/>
            <InstallSecond/>
        </section>
    )
}