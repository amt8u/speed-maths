import React from "react";
import "./chance.css";

function Chance(props) {
    return (
        <div className="timer-wrapper">
            <div className="timer">
                Wrong : <span className="timer-value chance">{props.count} / {props.maxAllowed}</span>
            </div>
        </div>
    );
}

export default Chance;