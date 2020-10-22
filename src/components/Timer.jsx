import React from "react";
import "./timer.css";

function Timer(props) {
    let timerClass = "timer-value";
    timerClass += props.time <= 10 ? " timer-critical" : " timer-low";
    return (
        <div className="timer-wrapper">
            <div className="timer">
                Time : <span className={timerClass}>{props.time}</span>
            </div>
        </div>
    );
}

export default Timer;