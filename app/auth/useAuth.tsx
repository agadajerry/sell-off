import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken: string) => {
    const userDetails: any = jwtDecode(authToken);
    setUser(userDetails);
    authStorage.storeToken(authToken);
  };
  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return { user, setUser, logout, login };
};

export default useAuth;
