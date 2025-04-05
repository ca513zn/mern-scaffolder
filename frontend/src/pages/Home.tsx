import PageWrapper from "@/components/common/PageWrapper";
import { useTranslation } from "react-i18next";
import Grid2 from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Home = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper maxWidth="md">
      <Grid2 container spacing={1}>
        <Grid2 size={12}>
          <Typography variant="h3" gutterBottom>
            {t("welcome")}
          </Typography>
        </Grid2>
      </Grid2>
    </PageWrapper>
  );
};

export default Home;
