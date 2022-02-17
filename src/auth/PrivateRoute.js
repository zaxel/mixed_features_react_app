import { useLocation, Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function PrivateRoute({ children }) {
    let location = useLocation();
    let auth = useAuth();
    return auth.user 
            ? children 
            : <Navigate to="/login" state={{ from: location }} /> ;
  
  }
  export default PrivateRoute;