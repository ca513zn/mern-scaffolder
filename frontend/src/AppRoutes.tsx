import { Route, Navigate, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import useAuth from "@/hooks/useAuth";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Profile from "./pages/Profile";
import ComponentList from "./pages/ComponentList";
import SplashScreen from "./components/common/SplashScreen";

const AppRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      {/* Explicit login route */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
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
      <Route
        path="/component-list"
        element={
          <ProtectedRoute>
            <ComponentList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="*"
        element={
          isAuthenticated ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
