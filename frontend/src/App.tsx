import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AppHeader from "@/components/layout/AppHeader";
import { Toolbar } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "@/utils/analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <AppHeader />
      <Toolbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
