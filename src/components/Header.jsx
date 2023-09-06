import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import LightIcon from "@mui/icons-material/Brightness7";
import DarkIcon from "@mui/icons-material/Brightness4";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

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

const Header = ({ theme, changeTheme, randomData }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            NoteBind!
          </Typography>
          <IconButton edge="end" onClick={randomData} size="large">
            <CodeRoundedIcon />
          </IconButton>
          {theme === "light" ? (
            <IconButton
              edge="end"
              onClick={() => {
                changeTheme("dark");
              }}
              size="large">
              <LightIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              onClick={() => {
                changeTheme("light");
              }}
              size="large">
              <DarkIcon />
            </IconButton>
          )}
          <IconButton edge="end" onClick={openGitHub} size="large">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
