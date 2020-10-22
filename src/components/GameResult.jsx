import React from "react";
import "./game-result.css";
// import Top from "./../Top";

export default function GameResult(props) {
    return (
        <div>            
            {/* <Top score={props.score} timer={props.timer}/> */}
            <div className="result-wrapper">
                <div className="play-again" onClick={props.onClick}>Play again</div>
                <div className="result-header">Game Over</div>
                <div className="result-score">{props.score}</div>
                <div className="result-score subtitle">Score</div>
            </div>
        </div>
    );
}