import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface AppButtonProps
  extends Omit<ButtonProps, "variant" | "color" | "size"> {
  icon?: React.ReactNode;
  isIconButton?: boolean;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"] | IconButtonProps["color"];
  size?: ButtonProps["size"] | IconButtonProps["size"];
  onClick?: () => void;
  children?: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
  icon,
  isIconButton = false,
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  children,
  ...rest
}) => {
  if (isIconButton) {
    return (
      <IconButton
        color={color as IconButtonProps["color"]}
        size={size as IconButtonProps["size"]}
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
      size={size as ButtonProps["size"]}
      startIcon={icon}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AppButton;
