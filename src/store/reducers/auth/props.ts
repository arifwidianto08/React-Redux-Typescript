// Defining State Type
export interface AuthState {
  authorized: any;
  isErrors?: any;
}
// Defining Action Type
export type AuthActions =
  | {
      type: "AUTH/SET_AUTHORIZED";
      payload: any;
    }
  | {
      type: "AUTH/SET_ERROR";
      payload: any;
    }
  | {
      type: "SET_TO_DEFAULT";
      payload?: any;
    }
  | {
      type: "AUTH/SET_LOGOUT";
      payload?: any;
    };
