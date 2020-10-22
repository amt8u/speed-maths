import React from "react";
import OptionsList from "./components/OptionsList";
import "./bottom.css";

function Bottom(props) {
    return (
        <div className="bottom-wrapper">
            <OptionsList options={props.options} onClick={props.onClick}/>
        </div>
    );
}

export default Bottom;