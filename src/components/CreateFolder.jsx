import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FolderDialog from "./FolderDialog";

const CreateFolder = (props) => {
  const [open, setOpen] = useState(false);

  const resetState = () => {
    setOpen(false);
  };

  return (
    <div className="create-folder">
      <Button
        onClick={() => {
          setOpen(true);
        }}
        startIcon={<AddIcon color="primary" />}
        variant="contained"
        color="secondary"
        fullWidth
        style={{ margin: "8px 0" }}
      >
        Add Folder
      </Button>
      {open && (
        <FolderDialog
          onReset={resetState}
          onAction={props.addFolder}
          label="Add Folder"
        />
      )}
    </div>
  );
};

export default CreateFolder;
