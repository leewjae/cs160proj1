import React from "react";
import {Link} from "react-router-dom"
import {Container, Row, Col} from "reactstrap"
import "./../css/navigationBar.css"

const NavigationBar = () => {
    return (
        <>
        <Row className="navigationBar">
            <Link to = "/" className = "navigation-item">
                <img src = {require("./../images/home.png")} alt = "Home" />
            </Link>
            <Link to = "/gps" className = "navigation-item">
                <img src = {require("./../images/globe.png")} alt = "Globe" />
            </Link>
            <Link to = "/compare" className = "navigation-item">
                <img src = {require("./../images/compare_arrows.png")} alt = "Compare" />
            </Link>
            <Link to = "/search" className = "navigation-item">
                <img src = {require("./../images/search.png")} alt = "Search" />
            </Link>
            
        </Row>
        </>
        
        
    )
}

export default NavigationBar