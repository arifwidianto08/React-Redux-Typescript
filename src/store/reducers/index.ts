import { combineReducers } from "redux";
import { AuthActions } from "./auth/props";
import { LettersActions } from "./letters/props";
import AuthReducer from "./auth/auth";
import LetterReducer from "./letters/letter";
import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";

const rootReducers = (history: History) =>
  combineReducers({
    auth: AuthReducer,
    letter: LetterReducer,
    router: connectRouter(history)
  });

export default rootReducers;
export interface State {
  count: number;
  router: RouterState;
}
export type AppRootActions = AuthActions | LettersActions;
export type AppRootState = ReturnType<typeof rootReducers>;
