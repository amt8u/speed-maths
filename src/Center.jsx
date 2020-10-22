import React from "react";
import "./center.css"

function Center(props) {
    return (
        <div className="center-wrapper">
            <div className="center">
                {/* {props.inputs.map(inp => <div className="token">{inp}</div>)} */}
                <div className="token">{props.inputs[0]}</div>
                <div className="token">{props.operator}</div>
                <div className="token">{props.inputs[1]}</div>
            </div>
        </div>
    );
}

export default Center;