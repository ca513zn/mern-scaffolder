import { useState, MouseEvent, ReactNode } from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";

export type MenuItems = {
  label: string;
  onClick: () => void;
  icon: ReactNode;
  cancelClose?: boolean;
};

type MenuContainerProps = {
  menuItems: MenuItems[];
  id: string;
  menuProps?: MenuProps;
};

const MenuContainer = ({
  menuItems,
  id = "menu",
  menuProps,
}: MenuContainerProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        sx={{
          marginLeft: "auto",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 300,
            backgroundColor: "background.dark",
            paddingX: 1,
            "--Paper-overlay": "none",
            transform: "translateX(-16px) !important",
          },
          ...menuProps?.sx,
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              item.onClick();
              if (!item.cancelClose) handleClose();
            }}
          >
            {item.icon && <Stack sx={{ marginRight: 2 }}>{item.icon}</Stack>}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuContainer;
