import React from "react";
import { Grid, Typography } from "@mui/material";

const date = new Date();
const year = date.getFullYear();

const Footer = (props) => (
  <Grid item style={{ textAlign: "center" }}>
    <footer>
      <Typography>Copyright &copy; {year}</Typography>
    </footer>
  </Grid>
);

export default Footer;
