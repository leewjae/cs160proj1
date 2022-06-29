import { Row, Container, Col } from "reactstrap";
import Trail from "../components/Trail";
import "../css/compare.css"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Compare = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <>
        <h1>Compare Trails!</h1>
        <Row className = "trails" id="compareItems">
            {
                one ? 
                <Container className="compareItem" onClick={()=>{setOne(!one);}} >
                    <Trail title = "Recommended for Beginners" name = "checkmark.png" description = "cool!" />
                </Container>
                :
                <Container className="compareItem" onClick={()=>{setOne(!one);}} >
                    <Trail title = "Recommended for Beginners" name = "indianRock.jpg" description = "cool!" />
                </Container>
            }
            {
                two ? 
                    <Container className="compareItem" onClick={()=>{setTwo(!two)}}>
                        <Trail title = "Recommended for Beautiful Views " name = "checkmark.png" description = "hard :(!" /> 
                    </Container>    
                :
                    <Container className="compareItem" onClick={()=>{setTwo(!two)}}>
                        <Trail title = "Recommended for Beautiful Views " name = "soda.jpg" description = "hard :(!" /> 
                    </Container>
            }
            <Container className="compareItem">
                <Trail title = "Recommended for Experts" name = "mtdiablo.jpg" description = "view!!!" />
            </Container>
            <Link to = "/comparedetail" className = "compareDetail">
                <button>
                    Compare "Recommend for Beginners and "Recommended for Beautiful Views"
                </button>
            </Link>     
            <div className = "placeholder" />
        </Row>
    </>
    )

}

export default Compare