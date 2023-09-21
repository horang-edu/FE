import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full h-[100vh] overflow-auto bg-bgcolor">
      <div className="flex w-full h-full">
        <Sidebar />
        <section className="w-full">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Layout;
