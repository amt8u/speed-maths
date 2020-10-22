import React from "react";
import "./game-start.css"
// import Top from "./../Top";

export default function GameStart(props) {
    return (
        <div>
            {/* <Top /> */}
            <div className="start-wrapper">
                <div className="start-header">Ready for challenge?</div>
                <div className="start-button" onClick={props.onClick}>Start</div>
            </div>
        </div>
    );
}