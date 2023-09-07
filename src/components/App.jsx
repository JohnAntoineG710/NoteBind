import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import themeBase from "../theme";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import sampleNotes from "../notes";
import sampleFolders from "../folders";
import { randomFolders, randomNotes } from "../randomDataSet";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");
  const [theme, setTheme] = useState(themeBase(themeMode));
  const [randomDataToggle, setRandomDataToggle] = useState(null);

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");

    if (!storedTheme || (storedTheme !== "light" && storedTheme !== "dark")) {
      setThemeMode("dark");
      localStorage.setItem("theme", "dark");
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

  const useRandomData = () => {
    if (randomDataToggle === null) {
      setRandomDataToggle(true);
    } else {
      setRandomDataToggle((old) => !old);
    }
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
          overflow: "hidden",
        }}
      >
        <Header
          theme={themeMode}
          changeTheme={changeTheme}
          randomData={useRandomData}
        />
        <Content
          sampleNotes={sampleNotes}
          sampleFolders={sampleFolders}
          randomNotes={randomNotes}
          randomFolders={randomFolders}
          randomDataToggle={randomDataToggle}
        />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
