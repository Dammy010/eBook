import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductList } from "../pages";
import ProductDetails from "../pages/ProductDetails";


export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
