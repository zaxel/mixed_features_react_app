import { useNavigate, useLocation } from "react-router";
import useAuth from "./useAuth";


function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
    let { from } = location.state || { from: { pathname: "/" } };
  
    let login = () => {
      auth.signin(() => {
        navigate(from);
      });
    };
  
    return (
      <div className="login-page">
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }

export default LoginPage;