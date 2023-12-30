import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Routes/App";
import Bags from "./Routes/bag";
import Home from "./Routes/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  MyntraStore  from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bags />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
