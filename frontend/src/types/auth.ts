enum UserRole {
  user = "user",
  admin = "admin",
}

export type User = {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role?: UserRole;
  picture?: string;
  googleId?: string;
};

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
}
