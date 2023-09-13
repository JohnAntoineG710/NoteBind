import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleTwoTone";
import NoteDialog from "./NoteDialog";
import { useTranslation } from "react-i18next";

const CreateArea = (props) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const resetState = () => {
    setOpen(false);
  };

  return <>
    {props.count !== 0 ? (
      <div style={{ position: "absolute", bottom: "16px", right: "16px" }}>
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
          size="large">
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
        open={open}
        activeFolder={props.activeFolder}
        onAction={props.onAdd}
        onReset={resetState}
        action="add"
      />
    )}
  </>;
};

export default CreateArea;
