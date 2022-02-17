import { fakeAuth } from "./fakeAuth";
import { useDispatch, useSelector } from "react-redux";

function useProvideAuth() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const signin = cb => {
      return fakeAuth.signin(() => {
        dispatch({type: 'SET_USER', payload: 'user boss'});
        cb();
      });
    };
  
    const signout = cb => {
      return fakeAuth.signout(() => {
        dispatch({type: 'SET_USER', payload: null})
        // setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signin,
      signout
    };
  }
  export default useProvideAuth;