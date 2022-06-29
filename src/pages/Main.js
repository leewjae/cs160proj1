import React from "react";
import Clock from 'react-live-clock';

const Main = () => {

    return(
        <>
        <div style = {{justifyContent: 'center', display : 'flex'}}>
            <Clock className = "clock" format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        </div>
        <h2>Hello User, you have been hiked 6.7 miles<br /> with Trekker this week. Well done!</h2>
        <img src={require("../images/Trekking.jpg")} style = {{width : "100%"}}/>
        <img src={require("../images/Trekking2.jpg")} style = {{width : "100%"}}/>
        <img src={require("../images/Trekking3.jpg")} style = {{width : "100%"}}/>
        <div className="placeholder" />
        </>
    )
}

export default Main