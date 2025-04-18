import { indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const typography = {
  fontFamily: `"Space Grotesk", sans-serif`,
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: indigo[900],
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    ...typography,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
    },
  },
  typography: {
    ...typography,
  },
});
