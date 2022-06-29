import React, { useEffect } from "react";
import Map from "./../components/Map"
import { Button, Container } from "reactstrap";
import Trail from "../components/Trail";
const Gps = () => {
    useEffect(()=> {
        const timer = setTimeout(() => {
            window.confirm('You are very close (1.2mi) to "MLK Student Union View Point." Do you want to trek to this place?')
          }, 5000);
        return () => clearTimeout(timer);
    }, [])
    return (
    <>
    <h1>Hello User!</h1>
    <Map />
    <h4> You can also go to this path from your location</h4>
    <Trail title = "Recommended for Beautiful Views " name = "soda.jpg" description = "hard :(!" /> 
   <div className="placeholder" />
    </>)
}

export default Gps