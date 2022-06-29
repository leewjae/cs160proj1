import React from "react";
import { Col, Container, Row } from "reactstrap";

const Trail = (props) => {
    return (
        <Container className = "trail">
            {props.checked ? 
            <img src={require("../images/checkmark.png")} alt = {props.name} className = "trailImage" />
            :
            <img src={require("../images/" + props.name)} alt = {props.name} className = "trailImage" />
             }
            <Col>
            <h2>{props.title}</h2>
            </Col>
        </Container>
    )
}

export default Trail