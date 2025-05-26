import { createBrowserRouter } from "react-router";

import Home from "@/views/home/Home";
import Dashboard from "@/views/dashboard/Dashboard";
import Layout from "@/layouts/default";
import DashboardLayout from "@/layouts/dashboard-layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: null,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
export type Router = typeof router;
