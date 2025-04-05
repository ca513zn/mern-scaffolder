import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import useAuth from "@/hooks/useAuth";
import SplashScreen from "./SplashScreen";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({
  children,
  redirectTo = "/",
}: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
