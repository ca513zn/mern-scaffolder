import { Route, Navigate, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import useAuth from "@/hooks/useAuth";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Profile from "./pages/Profile";

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
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
