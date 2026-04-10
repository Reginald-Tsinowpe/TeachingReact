import { useState } from "react";

import { SideBar } from "./partials/sidebar.tsx";
import { Footer } from "./partials/footer.tsx";
import { NavBar } from "./partials/navbar.tsx";

import { FormPage } from "./pages/Form.tsx";
import { DashboardPage } from "./pages/Dashboard.tsx";
import { AboutPage } from "./pages/About.tsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  function displayCurrentPage() {
    switch (currentPage) {
      case "form":
        return <FormPage />;
      case "dashboard":
        return <DashboardPage />;
      case "about":
        return <AboutPage />;
      default:
        return <div>No page to render</div>;
    }
  }

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
          <div className="flex flex-row gap-4">
            <button
              onClick={() => setCurrentPage("form")}
              className="bg-blue-300"
            >
              Form Page
            </button>
            <button
              onClick={() => setCurrentPage("dashboard")}
              className="bg-red-300"
            >
              Dashboard Page
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="bg-amber-300"
            >
              About Page
            </button>
          </div>
          {displayCurrentPage()}
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
