import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface AppButtonProps {
  icon?: React.ReactNode;
  isIconButton?: boolean;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"] | IconButtonProps["color"];
  onClick?: () => void;
  children?: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
  icon,
  isIconButton = false,
  variant = "contained",
  color = "primary",
  onClick,
  children,
  ...rest
}) => {
  if (isIconButton) {
    return (
      <IconButton
        color={color as IconButtonProps["color"]}
        onClick={onClick}
        {...rest}
      >
        {icon}
      </IconButton>
    );
  }

  return (
    <Button
      variant={variant}
      color={color as ButtonProps["color"]}
      startIcon={icon}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AppButton;
