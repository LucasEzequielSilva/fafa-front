import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  RouterProvider
} from "react-router-dom";
import "./index.css";
import router from './router/router'
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);