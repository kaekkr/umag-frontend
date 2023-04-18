import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorPage } from "./error-page";
import { GetId } from "./components/GetId";
import { Get } from "./components/Get";
import { Post } from "./components/Post";
import { Put } from "./components/Put";
import { Delete } from "./components/Delete";
import { Report } from "./components/Report";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/getsupply",
    element: <Get type={true}/>,
  },
  {
    path: "/getidsupply",
    element: <GetId type={true}/>,
  },
  {
    path: "/postsupply",
    element: <Post type={true}/>,
  },
  {
    path: "/putsupply",
    element: <Put type={true}/>,
  },
  {
    path: "/deletesupply",
    element: <Delete type={true}/>,
  },
  {
    path: "/getsale",
    element: <Get type={false}/>,
  },
  {
    path: "/getidsale",
    element: <GetId type={false}/>,
  },
  {
    path: "/postsale",
    element: <Post type={false}/>,
  },
  {
    path: "/putsale",
    element: <Put type={false}/>,
  },
  {
    path: "/deletesale",
    element: <Delete type={false}/>,
  },
  {
    path: "/getreport",
    element: <Report />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
