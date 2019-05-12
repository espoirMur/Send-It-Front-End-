import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Home from "./js/components/Home";
import store from "./js/reducers/index";
import "./css/home.css";
const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
render(<App />, document.getElementById("root"));
