import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const SplashScreen = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};

export default SplashScreen;
