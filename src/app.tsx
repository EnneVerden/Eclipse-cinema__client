import React from "react";
import { Provider } from "react-redux";
import Alert from "components/blocks/Alert";
import Router from "./router";

import store from "./store";
import "theme/style.css";

const App = () => (
  <Provider store={store}>
    <Router />
    <Alert />
  </Provider>
);

export default App;
