import React from "react";
import MainContextPage from "./alert/MainContextPage";
import AlertContextPage from "./alert/AlertContextPage";
import {AlertProvider} from "./alert/AlertContext";



let UseContextPage = () => {
    
    return(
        <AlertProvider>
            <MainContextPage />
            <AlertContextPage />
        </AlertProvider>
        
    )
}

export default UseContextPage;