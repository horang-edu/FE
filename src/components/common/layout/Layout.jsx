import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

function Layout() {
  return (
    <div className="w-full h-[100vh] bg-[#FFF8EF]">
      <div className="flex w-full h-full">
        <section className="w-[14.6%] h-full">
          <Sidebar />
        </section>
        <section className="w-full overflow-y-auto">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Layout;
