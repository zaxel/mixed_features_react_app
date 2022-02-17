import React, {useState, useContext} from "react";

const AlertContext = React.createContext();
// const ToggleContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
}
// export const useToggle = () => {
//     return useContext(ToggleContext);
// }

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false);
    const toggle = () => {setAlert(prev=>!prev)};
    return(
        <AlertContext.Provider value={{
            value: alert,
            toggle
        }}>
            {/* <ToggleContext.Provider value={toggle}> */}
                {children}
            {/* </ToggleContext.Provider> */}
        </AlertContext.Provider>
    )
}