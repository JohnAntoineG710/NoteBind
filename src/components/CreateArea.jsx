import React, { useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddCircleTwoTone";
import NoteDialog from "./NoteDialog";

const CreateArea = (props) => {
  const [open, setOpen] = useState(false);

  const resetState = () => {
    setOpen(false);
  };

  return (
    <>
      {props.count !== 0 ? (
        <div style={{ position: "absolute", bottom: "16px", right: "16px" }}>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
          >
            <AddIcon style={{ fontSize: "48px" }} color="primary" />
          </IconButton>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon color="secondary" />}
            onClick={() => {
              setOpen(true);
            }}
          >
            CREATE NOTE
          </Button>
        </div>
      )}
      {open && (
        <NoteDialog
          activeFolder={props.activeFolder}
          onAction={props.onAdd}
          onReset={resetState}
          actionLabel="Add Note"
        />
      )}
    </>
  );
};

export default CreateArea;
