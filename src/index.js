import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import allReducers from "./reducers/reducers";
import { createStore } from "redux";
// The provider provides the store for all the components
import { Provider } from "react-redux";

// Store: Globalized States
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Display store in the console
// myStore.subscribe(() => console.log(myStore.getState()));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  rootElement
);
