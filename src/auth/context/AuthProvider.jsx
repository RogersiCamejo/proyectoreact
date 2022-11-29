import React, { useReducer, useContext } from "react";
import {
  authInitialState,
  authReducer,
  AUTH_TYPES,
  initializeAuthState,
} from "../reducers/authReducer";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(
    authReducer,
    authInitialState,
    initializeAuthState
  );

  const login = (name) => {
    dispatch({
      type: AUTH_TYPES.LOGIN,
      payload: { name },
    });

    const auth = {
      name,
      isAuth: true,
    };

    localStorage.setItem("auth", JSON.stringify(auth));
  };

  const logout = () => {
    dispatch({
      type: AUTH_TYPES.LOGOUT,
    });

    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const { login, logout, auth } = useContext(AuthContext);
  return {
    login,
    logout,
    auth,
  };
};
