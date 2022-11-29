export const authInitialState = {
  name: null,
  isAuth: false,
};

export const initializeAuthState = () => {
  return JSON.parse(localStorage.getItem("auth")) || authInitialState;
};

export const AUTH_TYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_TYPES.LOGIN:
      return {
        ...state,
        name: action.payload.name,
        isAuth: true,
      };

    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        name: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
