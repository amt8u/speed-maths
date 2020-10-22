import React from "react";
import Option from "./Option";

function OptionsList(props) {
    return props.options.map(opt => (
        <Option value={opt} id={opt} name={opt} onClick={props.onClick}/>
    ));
}

export default OptionsList;