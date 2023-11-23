import { Outlet, Navigate, useLocation } from "react-router-dom";

import { useToken } from "@/utils/contexts/token";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

  const authProtected = ["/login", "/register"];
  const tokenProtected = [
    "/profile",
    "/edit-profile",
    "/history-borrow",
    "/dashboard",
    "/cart"
  ];
  const roleprotected = ["/dashboard"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    if (roleprotected.includes(pathname)) {
      if (user.role === "user") return <Navigate to="/" />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
