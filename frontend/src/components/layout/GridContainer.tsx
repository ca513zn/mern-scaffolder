import Grid2 from "@mui/material/Grid";
import { ComponentPropsWithoutRef, ElementType } from "react";

type GridComponentConfig<T extends ElementType> = {
  component: T;
  props?: ComponentPropsWithoutRef<T>;
  size?: number;
};

type GridContainerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: GridComponentConfig<any>[];
  spacing?: number;
};

const GridContainer = ({ components, spacing = 4 }: GridContainerProps) => {
  return (
    <Grid2 container spacing={spacing}>
      {components.map(
        ({ component: Component, props = {}, size = 12 }, index) => (
          <Grid2 size={size} key={index}>
            <Component {...props} />
          </Grid2>
        )
      )}
    </Grid2>
  );
};

export default GridContainer;
