import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import AuthProvider from "./context/AuthProvider.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID; // ✅ Make sure it's in your `.env`

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <CssBaseline />
    <AuthProvider>
      <App />
    </AuthProvider>
  </GoogleOAuthProvider>
);
