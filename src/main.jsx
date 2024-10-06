import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import Team from "./routes/Team";
import Calls from "./routes/Calls";
import Layout from "./components/shared/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Login route without layout
  },
  {
    path: "/",
    element: <Layout />, // Layout wraps the routes that need the sidebar
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "calls",
        element: <Calls />,
      },
      {
        path: "meetings",
        element: (
          <div className="flex h-screen w-full items-center justify-center bg-white">
            <h1>Meetings</h1>
          </div>
        ),
      },
      {
        path: "settings",
        element: (
          <div className="flex h-screen w-full items-center justify-center bg-white">
            <h1>Settings</h1>
          </div>
        ),
      },
      {
        path: "analytics",
        element: (
          <div className="flex h-screen w-full items-center justify-center bg-white">
            <h1>Analytics</h1>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
