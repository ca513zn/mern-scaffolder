import { ReactNode, FC } from "react";
import Container, { ContainerProps } from "@mui/material/Container";

interface PageWrapperProps extends ContainerProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default PageWrapper;
