import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FolderDialog from "./FolderDialog";

const CreateFolder = (props) => {
  const [open, setOpen] = useState(false);

  const resetState = () => {
    setOpen(false);
  };

  return (
    <div className="create-folder">
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddIcon color="primary" />
      </IconButton>
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
