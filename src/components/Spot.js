import React from "react";

const Spot = (props) => {
    return (
        <>
            <img src = {require("./../images/" + props.name + ".jpg")}/>
        </>
    )
}
export default Spot
