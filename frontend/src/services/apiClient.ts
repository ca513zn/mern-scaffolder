import axios from "axios";
import { User } from "@/types/auth";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5000/api", // ✅ Uses `??` for better fallback
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginWithGoogle = async (
  token: string
): Promise<{ data: { token: string; user: unknown } }> =>
  await apiClient.post("/auth/google", {
    token,
  });

export const logoutUser = async (): Promise<void> =>
  await apiClient.post("/protected/auth/logout");

export const refreshToken = async (): Promise<{ data: { user: User } }> =>
  await apiClient.get("/protected/auth/me");

export default apiClient;
