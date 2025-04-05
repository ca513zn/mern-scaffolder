import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface PageSubheaderProps extends TypographyProps {
  children: ReactNode;
}

const PageSubheader: FC<PageSubheaderProps> = ({ children, ...rest }) => {
  return (
    <Typography variant="h5" {...rest}>
      {children}
    </Typography>
  );
};

export default PageSubheader;
