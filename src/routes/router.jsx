import Mainlayout from "@/layout/MainLayout";
import About from "@/pages/main/about";
import Aicoach from "@/pages/main/aicoach";
import Home from "@/pages/main/Home";
import Pricing from "@/pages/main/pricing";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "ai-Coach",
        element: <Aicoach />,
      },
    ],
  },
]);
