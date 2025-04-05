import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

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
      <LinearProgress
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};

export default SplashScreen;
