import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface PageBodyProps extends TypographyProps {
  children: ReactNode;
}

const PageBody: FC<PageBodyProps> = ({ children, ...rest }) => {
  return (
    <Typography variant="body1" {...rest}>
      {children}
    </Typography>
  );
};

export default PageBody;
