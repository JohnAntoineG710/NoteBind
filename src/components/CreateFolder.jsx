import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FolderDialog from "./FolderDialog";
import { useTranslation } from "react-i18next";

const CreateFolder = (props) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const resetState = () => {
    setOpen(false);
  };

  return (
    <div className="create-folder">
      <Button
        onClick={() => setOpen(true)}
        startIcon={<AddIcon color="primary" />}
        variant="contained"
        color="secondary"
        fullWidth
        style={{ margin: "8px 0" }}
      >
        {t('content.sideBar.addFolderButton')}
      </Button>
      {open && (
        <FolderDialog
          open={open}
          onReset={resetState}
          onAction={props.addFolder}
          label={t('content.sideBar.folderDialog.action.new')}
        />
      )}
    </div>
  );
};

export default CreateFolder;
