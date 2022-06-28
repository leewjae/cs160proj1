import React from "react";
import Clock from 'react-live-clock';

const Main = () => {

    return(
        <>
        <Clock className = "clock" format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        <h2>Hello User, you have been hiked 6.7 miles<br /> with Trekker this week. Well done!</h2>
        </>
    )
}

export default Main