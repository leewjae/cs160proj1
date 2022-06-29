import React, { useEffect } from "react";
import Map from "./../components/Map"
import { Button, Container } from "reactstrap";

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
    </>)
}

export default Gps