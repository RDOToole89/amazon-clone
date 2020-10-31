import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Providor } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.render(
  <Providor store={store}>
    <Router>
      <App />
    </Router>
  </Providor>,
  document.getElementById("root")
);
