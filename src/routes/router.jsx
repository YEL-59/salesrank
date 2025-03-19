import DashboardLayout from "@/layout/dashboard-layout";
import InboxLayout from "@/layout/dashboard-layout/inbox";

import SettingsLayout from "@/layout/dashboard-layout/settings-layout";
import Mainlayout from "@/layout/MainLayout";
import CheckMail from "@/pages/auth/check-mail";
import ForgetPassword from "@/pages/auth/forget-password";
import Join from "@/pages/auth/join";
import ResetPassword from "@/pages/auth/reset-password";
import Signin from "@/pages/auth/signin";
import Signup from "@/pages/auth/signup";
import Candidate from "@/pages/dashboard/candidate";
import CandidateDetails from "@/pages/dashboard/candidate-details";
import Inbox from "@/pages/dashboard/inbox/inbox";

import Onboarding from "@/pages/dashboard/onboarding";
import Setting from "@/pages/dashboard/settings";
import About from "@/pages/main/about";
import Aicoach from "@/pages/main/aicoach";
import Consulting from "@/pages/main/consulting";
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
      {
        path: "consulting",
        element: <Consulting />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Candidate /> },
      {
        path: "onboarding",
        element: <Onboarding />,
      },
      {
        path: "inbox",
        element: <InboxLayout />,
        children: [{ index: true, element: <Inbox /> }],
      },
      {
        path: "details",
        element: <CandidateDetails />,
      },
      {
        path: "setting",
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            element: <Setting />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "sign-in",
    element: <Signin />,
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "check-mail",
    element: <CheckMail />,
  },
  {
    path: "join",
    element: <Join />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
]);
