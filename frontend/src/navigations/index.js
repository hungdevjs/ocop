import { Routes, Route } from "react-router-dom";

import AdminRoute from "./AdminRoute";
import HomeRoute from "./HomeRoute";
import LoginRoute from "./LoginRoute";
import ProductRoute from "./ProductRoute";
import SignUpRoute from "./SignUpRoute";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/products/*" element={<ProductRoute />} />
      <Route path="/admin/*" element={<AdminRoute />} />
      <Route path="/login/*" element={<LoginRoute />} />
      <Route path="/signup/*" element={<SignUpRoute />} />
      <Route path="*" element={<HomeRoute />} />
    </Routes>
  );
};

export default Navigation;
