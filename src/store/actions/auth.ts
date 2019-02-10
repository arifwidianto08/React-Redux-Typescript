import { AppThunkAction } from "..";
import { TokenGenerator } from "ts-token-generator";
import * as jwt from "jwt-simple";
import * as keygen from "keygenerator";

export function localAuthListener(): AppThunkAction {
  const accessToken = sessionStorage.getItem("SESSION_ACCESS_TOKEN");
  return dispatch => {
    if (accessToken && accessToken !== null) {
      dispatch({
        type: "AUTH/SET_AUTHORIZED",
        payload: accessToken
      });
    }
    return;
  };
}

export function signInAction(formField: any): AppThunkAction {
  const generateNewToken = new TokenGenerator();
  const secretKey = keygen._();
  const userData = {
    name: "Arif Widianto",
    phone: "012312313",
    email: "arifjozz123@gmail.com",
    loginTime: new Date().getTime()
  };
  return async dispatch => {
    try {
      if (formField.username === "arif" || formField.password === "123456") {
        const newAccessToken = await generateNewToken.generate();
        const encodedUserData = await jwt.encode(userData, secretKey);
        await sessionStorage.setItem(
          "SESSION_ACCESS_TOKEN",
          JSON.stringify(newAccessToken)
        );
        await sessionStorage.setItem(
          "SESSION_DATA_JWT",
          JSON.stringify(encodedUserData)
        );
        await sessionStorage.setItem(
          "SESSION_GENERATED_KEY",
          JSON.stringify(secretKey)
        );
        await dispatch({
          type: "AUTH/SET_AUTHORIZED",
          payload: newAccessToken
        });
      } else {
        await dispatch({
          type: "AUTH/SET_ERROR",
          payload: undefined
        });
        await setTimeout(() => {
          dispatch({
            type: "SET_TO_DEFAULT",
            payload: undefined
          });
        }, 3500);
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function logOutAction(): AppThunkAction {
  return async dispatch => {
    await sessionStorage.clear();
    await dispatch({
      type: "AUTH/SET_LOGOUT",
      payload: undefined
    });
  };
}
