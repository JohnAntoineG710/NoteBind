import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <Grid item>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">NoteBind!</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
