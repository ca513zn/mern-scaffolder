import GoogleLoginButton from "@/components/common/GoogleLoginButton";
import PageWrapper from "@/components/common/PageWrapper";
import Grid2 from "@mui/material/Grid";

const Login = () => {
  return (
    <PageWrapper>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <GoogleLoginButton />
        </Grid2>
      </Grid2>
    </PageWrapper>
  );
};

export default Login;
