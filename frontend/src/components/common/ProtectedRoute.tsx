import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import useAuth from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({
  children,
  redirectTo = "/login",
}: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
