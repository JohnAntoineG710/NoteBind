import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Grid,
} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

const App = () => {
  const [list, setList] = useState([...notes]);

  const addItem = (note) => {
    setList([...list, note]);
  };

  const delItem = (itemID) => {
    setList(
      list.filter((item, index) => {
        return index !== itemID;
      })
    );
  };

  return (
    <div className="viewport">
      <CssBaseline />
      {/* <Header /> */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">NoteBind!</Typography>
        </Toolbar>
      </AppBar>
      <Container component="main">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className="main-grid"
        >
          <Grid item>
            <CreateArea onAdd={addItem} />
            {list.map((note, index) => (
              <Note
                key={index}
                noteID={index}
                title={note.title}
                body={note.content}
                onDelete={delItem}
              />
            ))}
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
