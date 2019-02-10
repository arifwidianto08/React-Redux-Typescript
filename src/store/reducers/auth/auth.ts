import { Reducer } from "redux";
import { AuthState, AuthActions } from "./props";

const AuthReducer: Reducer<AuthState, AuthActions> = (
  state = {
    authorized: undefined,
    isErrors: undefined
  },
  action
) => {
  switch (action.type) {
    case "AUTH/SET_AUTHORIZED":
      return {
        authorized: action.payload,
        isErrors: undefined
      };
    case "AUTH/SET_ERROR":
      return {
        authorized: undefined,
        isErrors: "Auth Error, can't find your Account"
      };
    case "AUTH/SET_LOGOUT":
      return {
        authorized: undefined,
        isErrors: undefined
      };

    case "SET_TO_DEFAULT":
      return {
        authorized: undefined,
        isErrors: undefined
      };
    default:
      return state;
  }
};

export default AuthReducer;
