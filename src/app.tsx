import React from "react";
import { Provider } from "react-redux";

import Router from "./router";
import store from "./store";
import "theme/style-reset.css";

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
