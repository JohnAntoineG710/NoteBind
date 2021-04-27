import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import themeBase from "../theme";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [theme, setTheme] = useState(themeBase(themeMode));

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");

    if (!storedTheme || (storedTheme !== "light" && storedTheme !== "dark")) {
      setThemeMode("light");
      localStorage.setItem("theme", "light");
    } else {
      setThemeMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    setTheme(themeBase(themeMode));
  }, [themeMode]);

  const changeTheme = (mode) => {
    setThemeMode(mode);
    localStorage.setItem("theme", mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        direction="column"
        className="viewport"
        style={{
          height: "100vh",
        }}
      >
        <Header theme={themeMode} changeTheme={changeTheme} />
        <Content />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
