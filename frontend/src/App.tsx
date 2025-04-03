import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AppRoutes from "./AppRoutes";
import AppHeader from "@/components/layout/AppHeader";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppHeader />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
