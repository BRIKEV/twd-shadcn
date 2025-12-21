import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  }
]);

export default router;