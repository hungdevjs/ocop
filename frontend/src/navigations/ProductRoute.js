import { Routes, Route, Navigate } from "react-router-dom";

import ProductList from "../pages/Product/ProductList";
import ProductDetail from "../pages/Product/ProductDetail";

const ProductRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ProductRoute;
