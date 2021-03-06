import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import browserHistory from "./history";
import configureStore from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <>
        <App />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
