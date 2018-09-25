import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"; // eslint-disable-line
import {createStore, applyMiddleware, compose} from "redux"; // eslint-disable-line

import App from "./components/app";
import reducers from "./reducers";
import appMiddleware from "./middleware";

const createStoreFinal = compose(
    applyMiddleware(appMiddleware)
)(createStore);

const store = createStoreFinal(reducers);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#main")
);

