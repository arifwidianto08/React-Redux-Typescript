import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import browserHistory from "./history";
import configureStore from "./store/index";

const store = configureStore();
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={browserHistory}>
        <App />
      </ConnectedRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
