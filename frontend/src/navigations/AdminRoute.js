import { Routes, Route, Navigate } from "react-router-dom";

import LoginRoute from "./LoginRoute";
import Admin from "../pages/Admin/Admin";

const AdminRoute = () => {
  const isInitialized = false;

  if (!isInitialized)
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default AdminRoute;
