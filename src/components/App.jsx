import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="column"
        className="viewport"
        style={{
          height: "100vh",
        }}
      >
        <Header />
        <Content />
        <Footer />
      </Grid>
    </>
  );
};

export default App;
