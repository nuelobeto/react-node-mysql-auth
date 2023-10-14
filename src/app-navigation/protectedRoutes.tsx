import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../store/useAuth";

const ProtectedRoutes = () => {
  const { user } = useAuth((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user && <Outlet />;
};

export default ProtectedRoutes;
