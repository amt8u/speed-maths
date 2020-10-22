import React from "react";
import "./sound.css";

function Sound(props) {
    return (
        <div title={`Sound ${props.enabled ? "Off" : "On"}`} className="sound-wrapper">
            <div className={props.enabled ? "on" : "off"} onClick={() => props.setSound(props.enabled ? false : true)}>                
            </div>
        </div>
    );
}

export default Sound;