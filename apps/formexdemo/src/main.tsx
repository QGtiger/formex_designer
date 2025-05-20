import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initRoutes } from "./utils/pagerouter";
import { basename } from "./utils";
import { App } from "antd";

import "./main.css";

const router = createBrowserRouter(initRoutes(), {
  basename,
});

createRoot(document.getElementById("root")!).render(
  <App>
    <RouterProvider router={router} />
  </App>
);
