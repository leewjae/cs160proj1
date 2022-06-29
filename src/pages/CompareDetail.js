import React from "react";
import { Row, Col, Container } from "reactstrap";
import Trail from "../components/Trail";
const CompareDetail = () => {
    return (
        <>
        <Row>
            <Container className="compareItemDetail"  >
                <Trail title = "Recommended for Beginners" name = "indianRock.jpg" description = "cool!" />
            </Container>
            <p>This trail will be your fit if you are new to trekking. First ofall,
                    <br /> the elevation change is not too extreme. Also, it is very good for the
                    <br /> sightseer like you! It has several viewspots during your journey
                    <br /> and I am sure that you will like it.
                </p>
                <p>
                    difficulty : 1.5 / 10.0
                    <br /> 
                    Important Features: Indian Rock Park - FireTrail Park - Ohlone Park -  Terra Incognita National Park
                    <br />
                    Estimated Length: 2.3 hrs
                    <br />
                    Elevation Gain: 120 feet
                </p>
            <Container className="compareItemDetail" >
                <Trail title = "Recommended for Beautiful Views " name = "soda.jpg" description = "hard :(!" /> 
            </Container> 
            <p>This trail will be your fit if you are quite advanced to trekking. First ofall,
                    <br /> the elevation change is quite extreme. Also, it is very good for the
                    <br /> sightseer like you! It has several viewspots during your journey
                    <br /> and I am sure that you will like it. Moreover, you can visit UC Berkeley, one
                    <br /> of the greatest university in the world!
                </p>
                <p>
                    difficulty : 5.5 / 10.0
                    <br /> 
                    Important Features: Indian Rock Park - IB's - In & out burger -  Soda Hall
                    <br />
                    Estimated Length: 2.3 hrs
                    <br />
                    Elevation Gain: 420 feet
                </p>
        </Row>
        <div className="placeholder" />
         </>
    )
}

export default CompareDetail