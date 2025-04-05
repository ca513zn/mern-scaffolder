import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface PageTitleProps extends TypographyProps {
  children: ReactNode;
}

const PageTitle: FC<PageTitleProps> = ({ children, ...rest }) => {
  return (
    <Typography variant="h4" {...rest}>
      {children}
    </Typography>
  );
};

export default PageTitle;
