import { createStore, applyMiddleware, compose } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppRootActions, AppRootState } from "./reducers";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const configureStore: any = (preloadedState?: any) => {
  const AppStore: any = createStore(
    rootReducers(history),
    preloadedState,
    compose(
      applyMiddleware(thunk, routerMiddleware(history)),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return AppStore;
};

export default configureStore;

export type AppThunkAction<TResult = void> = ThunkAction<
  TResult,
  AppRootState,
  undefined,
  AppRootActions
>;
