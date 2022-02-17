import { useContext, createContext } from "react";
export const authContext = createContext();

function useAuth() {
    return useContext(authContext);
}
export default useAuth;