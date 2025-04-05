import Avatar, { AvatarProps } from "@mui/material/Avatar";
import React from "react";

type AppAvatarSize = "small" | "medium" | "large";

interface AppAvatarProps extends AvatarProps {
  size?: AppAvatarSize;
}

const sizeMap: Record<AppAvatarSize, number> = {
  small: 32,
  medium: 48,
  large: 64,
};

const AppAvatar: React.FC<AppAvatarProps> = ({
  size = "medium",
  sx,
  ...rest
}) => {
  const dimension = sizeMap[size];

  return (
    <Avatar
      sx={{
        width: dimension,
        height: dimension,
        ...sx, // allow override via props
      }}
      {...rest}
    />
  );
};

export default AppAvatar;
