// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { DashboardPage } from "./pages/Dashboard.tsx";
import { FormPage } from "./pages/Form.tsx";
import { AboutPage } from "./pages/About.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<DashboardPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
