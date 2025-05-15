import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductList } from "../pages";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/Cart/CartPage";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import OrderPage from "../pages/Order/OrderPage";
import DashboardPage from "../pages/Dashboadrd/DashboardPage";


export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="order-summary" element={<OrderPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        
      </Routes>
    </>
  );
};
