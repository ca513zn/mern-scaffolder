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
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = useCallback(async () => {
    try {
      const res = await refreshToken();
      if (res.data.user) {
        setUser(res.data.user);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
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

  const contextValue: AuthContextType = {
    isAuthenticated,
    user,
    login: (userData: User) => {
      setIsAuthenticated(true);
      setUser(userData);
    },
    logout: async () => {
      await logoutUser();
      setIsAuthenticated(false);
      setUser(null);
    },
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
