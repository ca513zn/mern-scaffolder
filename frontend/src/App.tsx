import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AppRoutes from "./AppRoutes";
import AppHeader from "@/components/layout/AppHeader";
import { Toolbar } from "@mui/material";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppHeader />
        <Toolbar />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
