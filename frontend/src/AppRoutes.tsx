import { Route, Navigate, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import useAuth from "@/hooks/useAuth";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
      />
      <Route
        path="/home"
        element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
