import React from "react";
import {Link} from "react-router-dom"
import {Container, Row, Col} from "reactstrap"
import "./../css/navigationBar.css"

const NavigationBar = () => {
    return (
        <>
        <nav className="wrapper">
            <div>
            <Link to = "/" className = "navigation-item">
                <img src = {require("./../images/home.png")} alt = "Home" className="navigationPicture"/>
            </Link>
            </div>
            <div>
            <Link to = "/gps" className = "navigation-item">
                <img src = {require("./../images/globe.png")} alt = "Globe" className="navigationPicture"/>
            </Link>
                </div>
                <div>
                <Link to = "/compare" className = "navigation-item">
                <img src = {require("./../images/compare_arrows.png")} alt = "Compare" className="navigationPicture"/>
                </Link>
                </div>
                <div>
                <Link to = "/search" className = "navigation-item">
                <img src = {require("./../images/search.png")} alt = "Search" className="navigationPicture"/>
            </Link>
                
                </div>       
        </nav>
        </>
        
        
    )
}

export default NavigationBar