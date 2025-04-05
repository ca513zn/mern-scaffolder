import PageWrapper from "@/components/common/PageWrapper";
import PageBody from "@/components/font/PageBody";
import PageCaption from "@/components/font/PageCaption";
import PageSubheader from "@/components/font/PageSubheader";
import PageTitle from "@/components/font/PageTitle";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid";

const ComponentList = () => {
  return (
    <PageWrapper maxWidth="md">
      <Grid2 container spacing={4}>
        <Grid2 size={12}>
          <Typography variant="h4">Components</Typography>
        </Grid2>
        <Grid2 size={12}>
          <PageBody>
            This page lists all the components available in the application. You
            can use these components to build your own pages and customize the
            look and feel of the application.
          </PageBody>
        </Grid2>
        <Grid2 size={12}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <PageSubheader>Typography</PageSubheader>
            </Grid2>
            <Grid2 size={12}>
              <PageTitle>Page Title</PageTitle>
            </Grid2>
            <Grid2 size={12}>
              <PageSubheader>Page Subheader</PageSubheader>
            </Grid2>
            <Grid2 size={12}>
              <PageBody>Page Body</PageBody>
            </Grid2>
            <Grid2 size={12}>
              <PageCaption>Page Caption</PageCaption>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </PageWrapper>
  );
};

export default ComponentList;
