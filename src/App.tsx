import { useState } from "react";
import { Outlet } from "react-router";

import { SideBar } from "./partials/sidebar.tsx";
import { Footer } from "./partials/footer.tsx";
import { NavBar } from "./partials/navbar.tsx";

import { FormPage } from "./pages/Form.tsx";
import { DashboardPage } from "./pages/Dashboard.tsx";
import { AboutPage } from "./pages/About.tsx";

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="h-10 bg-red-200">
        <NavBar />
      </div>

      <div className="flex flex-1">
        <div className="bg-blue-600">
          <SideBar />
        </div>
        <div className="flex flex-col w-full content-center justify-center bg-gray-100">
          <Outlet />
        </div>
      </div>

      <div className="bg-yellow-400 h-10">
        <Footer />
      </div>
    </div>
  );
}

/*
 *
 *  {currentPage === "dashboard" ? (
            <DashboardPage />
          ) : currentPage === "form" ? (
            <FormPage />
          ) : (
            <AboutPage />
          )}

 *
 */
