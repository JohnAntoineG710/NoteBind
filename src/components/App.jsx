import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [list, setList] = useState([]);

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
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default App;
