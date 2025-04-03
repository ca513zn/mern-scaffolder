import { useState, useCallback, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { AuthContextType, User } from "@/types/auth";
import { refreshToken, logoutUser } from "@/services/apiClient";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkAuthStatus = useCallback(async () => {
    try {
      setLoading(true);
      const res = await refreshToken();
      setIsAuthenticated(!!res.data.user);
      if (res.data.user) {
        setUser(res.data.user);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await logoutUser();
      setIsAuthenticated(false);
    } catch (error) {
      console.error("❌ Logout failed:", error);
    }
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
