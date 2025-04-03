import { useState, MouseEvent } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

type MenuContainerProps = {
  menuItems: { label: string; onClick: () => void }[];
};

const MenuContainer = ({ menuItems }: MenuContainerProps) => {
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
        id="menu-container"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              item.onClick();
              handleClose();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuContainer;
