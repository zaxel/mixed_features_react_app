import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";

function AuthButton() {
    let navigate = useNavigate();
    let location = useLocation();
    let { pathname } = location;
    let auth = useAuth();
    let { from } = location.state || {from: { pathname }}
  
    let login = () => {
      auth.signin(() => {
        navigate( from );
      });
    };
    let signout = () => {
      auth.signout(() => { 
        // navigate({ pathname: "/" });
      });
    }
    return auth.user ? (
      <p>
        Welcome {auth.user}!
        <button onClick={signout}>
          Sign out
        </button>
      </p>
    ) : (
      <div><p>You are not logged in.</p>
      <button onClick={login}>Log in</button></div>
    );
  
  }

  export default AuthButton;