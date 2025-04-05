import { ReactNode } from "react";
import Box from "@mui/material/Box";

type AppContainerProps = {
  children: ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        minHeight: "100vh",
        pb: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default AppContainer;
