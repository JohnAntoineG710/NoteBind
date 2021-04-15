import React from "react";
import { Grid } from "@material-ui/core";

const date = new Date();
const year = date.getFullYear();

const Footer = (props) => (
  <Grid item style={{ textAlign: "center" }}>
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  </Grid>
);

export default Footer;
