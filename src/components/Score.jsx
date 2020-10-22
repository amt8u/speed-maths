import React from "react";
import "./score.css";

function Score(props) {
    return (
        <div className="score-wrapper">
            <div className="score">
                {props.value}
            </div>
        </div>
    );
}

export default Score;