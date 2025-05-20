import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initRoutes } from "./utils/pagerouter";
import { basename } from "./utils";

const router = createBrowserRouter(initRoutes(), {
  basename,
});

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
