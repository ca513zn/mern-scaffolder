import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { User } from "@/types/auth";
import { loginWithGoogle } from "@/services/apiClient";
import SplashScreen from "./SplashScreen";

const GoogleLoginButton = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSuccess = async (response: CredentialResponse) => {
    try {
      setLoading(true);
      const { credential } = response;

      if (!credential) {
        console.error("Google token is missing");
        return;
      }

      const { data } = await loginWithGoogle(credential);

      if (data.user) {
        login(data.user as User);
        navigate("/home", { replace: true });
      }
    } catch (error) {
      console.error("❌ Google Auth Failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.error("❌ Login Failed")}
      />
      {loading && <SplashScreen />}
    </>
  );
};

export default GoogleLoginButton;
