import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";

const LoginRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default LoginRoute;
