import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface PageCaptionProps extends TypographyProps {
  children: ReactNode;
}

const PageCaption: FC<PageCaptionProps> = ({ children, ...rest }) => {
  return (
    <Typography variant="caption" {...rest}>
      {children}
    </Typography>
  );
};

export default PageCaption;
