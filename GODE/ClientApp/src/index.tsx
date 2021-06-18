import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import axios from "axios";

let persistor = persistStore(store);

axios.defaults.baseURL = "https://localhost:44383/api/";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
