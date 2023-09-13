import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const date = new Date();
const year = date.getFullYear();

const Footer = (props) => {
  const { t } = useTranslation();

  return (
  <Grid item style={{ textAlign: "center" }}>
    <footer>
      <Typography>{t('footer.copyright')} &copy; {year}</Typography>
    </footer>
  </Grid>
  );
};

export default Footer;
