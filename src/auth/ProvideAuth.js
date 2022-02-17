import useProvideAuth from "./useProvideAuth";
import { authContext } from "./useAuth";
function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
  }

export default ProvideAuth;