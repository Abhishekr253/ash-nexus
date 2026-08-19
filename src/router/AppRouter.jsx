import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}