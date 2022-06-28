import React from "react";
import { Row, Container, Col } from "reactstrap";
import Trail from "../components/Trail";
import "../css/compare.css"

const Compare = () => {
    
    return (
        <>
        <h1>Recommended</h1>
        <Row className = "trails" id="compareItems">
            <Container className="compareItem" >
                <Trail title = "Recommended for Beginners" name = "indianRock" description = "cool!" />
            </Container>
            <Container className="compareItem">
                <Trail title = "Recommended for Beautiful Views " name = "soda" description = "hard :(!" /> 
            </Container>
            <Container className="compareItem">
                <Trail title = "Recommended for Experts" name = "mtdiablo" description = "view!!!" />
            </Container>
        </Row>
        <h1>Intro to city walking</h1>
        <Row className = "trails" id="compareItems">
            <Container className="compareItem">
            <Trail title = "Become Albert Einstein" name = "lawrence" description = "best way to tour Berkeley Lab" />
            </Container>
            <Container className="compareItem">
            <Trail title = "Recommended for Beautiful Views " name = "soda" description = "hard :(!" />
            </Container>
            <Container className="compareItem">
            <Trail title = "Recommended for Experts" name = "mtdiablo" description = "view!!!" />
            </Container>
        </Row>
    </>
    )

}

export default Compare