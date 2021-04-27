import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LightIcon from "@material-ui/icons/Brightness7";
import DarkIcon from "@material-ui/icons/Brightness4";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const openGitHub = () =>
  window.open("https://github.com/JohnAntoineG710/NoteBind", "_blank");

const Header = ({ theme, changeTheme }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            NoteBind!
          </Typography>
          {theme === "light" ? (
            <IconButton
              edge="end"
              onClick={() => {
                changeTheme("dark");
              }}
            >
              <LightIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              onClick={() => {
                changeTheme("light");
              }}
            >
              <DarkIcon />
            </IconButton>
          )}
          <IconButton edge="end" onClick={openGitHub}>
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
