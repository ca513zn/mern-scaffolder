import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import MenuContainer from "@/components/common/MenuContainer";

const AppHeader = () => {
  const { logout, isAuthenticated } = useAuth();
  if (!isAuthenticated) return null;

  const menuItems = [
    {
      label: "Logout",
      onClick: logout,
    },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <MenuContainer menuItems={menuItems} />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
