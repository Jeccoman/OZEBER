import React from "react"
import Navbar from "./components/Navbar"
import OurImage from "./components/OurImage"


export default function Nav(){

    return(
        <div className="flex justify-between lg:items-start gap-2 bg-bl ">
            <OurImage/>
            <div className="m-2">
            <Navbar/>
            </div>
                        
        </div>
    )
}