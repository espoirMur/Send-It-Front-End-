import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import productList from "./js/components/productList";
import store from "./js/reducers/index";
const App = () => (
  <Provider store={store}>
    <productList />
  </Provider>
);
render(<App />, document.getElementById("root"));
