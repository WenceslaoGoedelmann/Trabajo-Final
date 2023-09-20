import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import User from "../pages/User/User";
import ConfirmedBuy from "../pages/ConfirmedBuy/ConfirmedBuy";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo="/login">
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/user" element={<User />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/confirmed" element={<ConfirmedBuy />} />
      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
