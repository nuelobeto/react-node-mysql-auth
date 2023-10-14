import { Routes, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import AuthSuccess from "../pages/auth/AuthSuccess";
import ProtectedRoutes from "./protectedRoutes";
import Dashboard from "../pages/dashboard/Dashboard";
import Error from "../pages/error_pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify_email/:userId/:token" element={<Login />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route
        path="/reset_password/:userId/:token"
        element={<ResetPassword />}
      />
      <Route path="/register_success" element={<AuthSuccess />} />
      <Route path="/forgot_success" element={<AuthSuccess />} />
      <Route path="/reset_success" element={<AuthSuccess />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Dashboard />} />
        <Route path="/tasks" element={<Dashboard />} />
        <Route path="/reporting" element={<Dashboard />} />
        <Route path="/users" element={<Dashboard />} />
        <Route path="/support" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
