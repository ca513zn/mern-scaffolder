export type User = {
  id: string;
  name: string;
  email: string;
  role?: "admin" | "user";
};

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}
