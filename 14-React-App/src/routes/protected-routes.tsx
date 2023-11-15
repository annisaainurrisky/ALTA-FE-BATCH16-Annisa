import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const authProtected = ["/login", "/register"];
  const tokenProtected = [
    "/profile",
    "edit-profile",
    "/history-borrow",
    "/dashboard",
  ];
  const roleprotected = ["/dashboard"];
  return <Outlet />;
};

export default ProtectedRoutes;
