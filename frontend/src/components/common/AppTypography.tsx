import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface AppTypographyProps extends TypographyProps {
  children: ReactNode;
}

const AppTypography: FC<AppTypographyProps> = ({
  children,
  variant,
  ...rest
}) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export default AppTypography;
