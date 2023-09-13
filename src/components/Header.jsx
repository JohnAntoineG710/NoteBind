import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import LightIcon from "@mui/icons-material/Brightness7";
import DarkIcon from "@mui/icons-material/Brightness4";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import {useTranslation} from "react-i18next";

const PREFIX = 'Header';

const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`
};

const StyledGrid = styled(Grid)((
  {
    theme
  }
) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },

  [`& .${classes.title}`]: {
    flexGrow: 1,
  }
}));

const openGitHub = () =>
  window.open("https://github.com/JohnAntoineG710/NoteBind", "_blank");


const Header = ({ theme, changeTheme, randomData }) => {

  const { t, i18n } = useTranslation();

  const [ lang, setLang ] = useState('en');

  const langs = {
    en: { nativeName: 'English' },
    ar: { nativeName: 'العربية' }
  };

  const changeLanguage = () => {
    if (lang === 'en') {
      i18n.changeLanguage('ar');
      setLang('ar');
    } else {
      i18n.changeLanguage('en');
      setLang('en');
    }
  }

  return (
    <StyledGrid item>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {t('header.title')}
          </Typography>
          <IconButton edge="end" onClick={changeLanguage} size="large">
            <LanguageIcon />
          </IconButton>
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
    </StyledGrid>
  );
};

export default Header;
