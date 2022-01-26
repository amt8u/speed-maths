import React from "react";
import Score from "./components/Score";
import Timer from "./components/Timer";
import Sound from "./components/Sound";
import Chance from "./components/Chance";
import "./top.css";

function Top(props) {
    return (
        <div className="top-wrapper">
            <Score value={props.score}/>
            <Chance count={props.inCorrectCount} maxAllowed={props.maxAllowed}/>
            <Timer time={props.timer}/>
            <Sound enabled={props.sound} {...props}/>
        </div>
    );
}

export default Top;