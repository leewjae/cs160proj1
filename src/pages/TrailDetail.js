import React from "react";
import { Row } from "reactstrap";
const TrailDetail = (props) => {

    return(
        <>
        <Row>
            <button>Go back</button>
            <p>{props.name}</p>
        </Row>
            <div>
                <img src={require("../images/indianRock.jpg")} alt = "indianRock"
                style={{width : '100%'}}
                />
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
            </div>
        </>
    )
}

export default TrailDetail