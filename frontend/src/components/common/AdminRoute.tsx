import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { ReactNode } from "react";

type AdminRouteProps = {
  children: ReactNode;
  redirectTo?: string;
};

const AdminRoute = ({ children, redirectTo = "/" }: AdminRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <Navigate to={redirectTo} replace />;
  if (user?.role !== "admin") return <Navigate to="/not-authorized" replace />;

  return children;
};

export default AdminRoute;
