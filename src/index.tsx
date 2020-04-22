import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AuthPage from "./components/pages/auth";

import "./theme/style-reset.css";

ReactDOM.render(<AuthPage />, document.getElementById("root"));

serviceWorker.unregister();
