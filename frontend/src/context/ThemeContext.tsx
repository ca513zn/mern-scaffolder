import { createContext } from "react";
import { ThemeMode } from "./ThemeProvider";

const ThemeContext = createContext({
  mode: "light" as ThemeMode,
  toggleTheme: () => {},
});

export default ThemeContext;
