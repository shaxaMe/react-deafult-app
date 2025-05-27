import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home/Home";
import Dashboard from "@/pages/dashboard/Dashboard";
import Layout from "@/layouts/default";
import DashboardLayout from "@/layouts/dashboard-layout";
import AuthMiddleware from "@/middleware/authMiddleware";
import Login from "@/pages/login";
import Users from "@/pages/dashboard/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    element: (
      <AuthMiddleware>
        <DashboardLayout />
      </AuthMiddleware>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
export type Router = typeof router;
