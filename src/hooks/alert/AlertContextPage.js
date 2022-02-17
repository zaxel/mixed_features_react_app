import React from "react";
import {useAlert} from "./AlertContext";

let AlertContextPage = () => {
    const {value} = useAlert();

    if(!value) return null;
    return(
        <strong><div style={{fontSize: '22px', backgroundColor: "goldenrod", marginTop: "15px", padding: "12px"}}>this is very important message</div></strong>
    )
}
export default AlertContextPage;