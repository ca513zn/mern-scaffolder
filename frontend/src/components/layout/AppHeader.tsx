import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import MenuContainer, { MenuItems } from "@/components/common/MenuContainer";
import { useTranslation } from "react-i18next";
import {
  Brightness4,
  Brightness7,
  Home,
  Language,
  Logout,
} from "@mui/icons-material";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Avatar, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
const AppHeader = () => {
  const { logout, isAuthenticated, user } = useAuth();
  const { i18n, t } = useTranslation();
  const { mode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();

  if (!isAuthenticated) return null;

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("i18nextLng", newLanguage); // Store the selected language in local storage
    document.documentElement.lang = newLanguage; // Update the lang attribute of the HTML element
  };

  const menuItems: MenuItems[] = [
    {
      label: t("profile"),
      icon: (
        <Avatar
          src={user?.picture ?? ""}
          sx={{
            width: 24,
            height: 24,
          }}
        />
      ),
      onClick: () => navigate("/profile"),
    },
    {
      label: t("home"),
      icon: <Home />,
      onClick: () => navigate("/home"),
    },
    {
      label: t("components"),
      onClick: () => navigate("/component-list"),
      icon: <ExtensionIcon />,
    },
    {
      label: i18n.language === "en" ? "Español" : "English",
      onClick: toggleLanguage,
      icon: <Language />,
      cancelClose: true,
    },
    {
      label: mode === "light" ? "Dark Mode" : "Light Mode",
      icon: mode === "light" ? <Brightness4 /> : <Brightness7 />,
      onClick: toggleTheme,
      cancelClose: true,
    },
    {
      isDivider: true,
    },
    {
      label: t("logout"),
      onClick: logout,
      icon: <Logout />,
    },
  ];

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography>Scaffolder</Typography>
        <MenuContainer menuItems={menuItems} id="nav-menu" />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
