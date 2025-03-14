import Mainlayout from "@/layout/MainLayout";
import Home from "@/pages/main/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
