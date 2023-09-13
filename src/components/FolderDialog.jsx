import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FolderDialog = (props) => {
  const [folder, setFolder] = useState({ name: "" });
  const [nameError, setNameError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (props.folderID) {
      setFolder({
        id: props.folderID,
        name: props.folderName,
      });
    }
  }, [props]);

  const handleChange = (e) => {
    const text = e.target.value;
    setFolder((old) => ({ ...old, name: text }));
  };

  const handleClose = () => {
    setFolder({ name: "" });
    props.onReset();
  };

  const handleAction = () => {
    setNameError(false);
    if (folder.name === "") {
      setNameError(true);
    } else {
      props.onAction(folder);
      handleClose();
    }
  };

  const inputProps = {
    name: "createFolder",
    type: "text",
    autoComplete: "off",
    value: folder.name,
    onChange: handleChange,
  };

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        {props.folderID ?
          t('content.sideBar.folderDialog.title.edit') : 
          t('content.sideBar.folderDialog.title.new')
        }
      </DialogTitle>
      <DialogContent>
        <TextField
          InputProps={inputProps}
          label={t('content.sideBar.folderDialog.inputLabel')}
          color="primary"
          error={nameError}
          helperText={nameError && "Please provide folder name"}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAction} color="primary">
          {props.label}
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FolderDialog;
