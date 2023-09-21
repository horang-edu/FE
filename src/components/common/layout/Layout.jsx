import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full h-[100vh] overflow-auto">
      <div className="flex h-full w-full">
        <Sidebar />
        <section className="w-full">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Layout;
