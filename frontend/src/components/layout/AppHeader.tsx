import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import MenuContainer, { MenuItems } from "@/components/common/MenuContainer";
import { useTranslation } from "react-i18next";
import Brightness7 from "@mui/icons-material/Brightness7";
import Brightness4 from "@mui/icons-material/Brightness4";
import Home from "@mui/icons-material/Home";
import Language from "@mui/icons-material/Language";
import Logout from "@mui/icons-material/Logout";
import { useThemeContext } from "@/hooks/useThemeContext";
import Avatar from "@mui/material/Avatar";
import ExtensionIcon from "@mui/icons-material/Extension";
import Slide from "@mui/material/Slide";
import { useScrollDirection } from "@/hooks/useScrollDirection"; // path as needed
import AppTypography from "../common/AppTypography";

const AppHeader = () => {
  const scrollDirection = useScrollDirection();
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
      isDivider: true,
    },
    {
      label: mode === "light" ? t("dark_theme") : t("light_theme"),
      icon: mode === "light" ? <Brightness4 /> : <Brightness7 />,
      onClick: toggleTheme,
      cancelClose: true,
    },

    {
      label: i18n.language === "en" ? "Español" : "English",
      onClick: toggleLanguage,
      icon: <Language />,
      cancelClose: true,
    },
    {
      label: t("logout"),
      onClick: logout,
      icon: <Logout />,
    },
  ];

  return (
    <Slide appear={false} direction="down" in={scrollDirection === "up"}>
      <AppBar position="fixed">
        <Toolbar sx={{ gap: 2 }}>
          <AppTypography
            onClick={() => navigate("/")}
            variant="body1"
            sx={{
              cursor: "pointer",
            }}
          >
            Scaffolder
          </AppTypography>
          <MenuContainer menuItems={menuItems} id="nav-menu" />
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default AppHeader;
