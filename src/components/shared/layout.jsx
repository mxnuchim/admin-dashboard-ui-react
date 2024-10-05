// components/shared/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar /> {/* Navbar component */}
      <div className="flex flex-1">
        <Sidebar /> {/* Sidebar component */}
        <main className="w-full bg-white">
          {" "}
          {/* Main content area */}
          <Outlet /> {/* Nested routes will be rendered here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
