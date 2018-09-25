import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"; // eslint-disable-line
import {createStore} from "redux"; // eslint-disable-line

import App from "./components/app";
import reducers from "./reducers";


ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    document.querySelector("#main")
);

