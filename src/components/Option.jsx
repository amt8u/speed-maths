import React from "react";
import "./option.css";

function Option(props) {
    return (
        <div className="option-wrapper">
            {/* <input class="option" type="radio" id={props.id} name={props.id} value={props.value}></input>
            <label for={props.id}>{props.value}</label> */}
            <div onClick={props.onClick} className="option">{props.value}</div>
        </div>
    );
}

export default Option;