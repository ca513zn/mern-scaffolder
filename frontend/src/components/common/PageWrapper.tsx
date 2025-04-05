import { ReactNode, FC } from "react";
import Container, { ContainerProps } from "@mui/material/Container";

interface PageWrapperProps extends ContainerProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, ...rest }) => {
  return (
    <Container
      {...rest}
      sx={{
        mb: 8,
        mt: 2,
        ...rest.sx,
      }}
    >
      {children}
    </Container>
  );
};

export default PageWrapper;
