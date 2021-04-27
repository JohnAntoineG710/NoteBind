import React from "react";
import Folder from "./Folder";
import CreateFolder from "./CreateFolder";
import { Grid, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={3} lg={2} style={{ maxHeight: "100%", overflow: "auto" }}>
      <CreateFolder addFolder={props.addFolder} />
      <List className={classes.root}>
        {props.folders.map((folder) => (
          <Folder
            key={folder.id}
            id={folder.id}
            name={folder.name}
            active={props.active}
            selectFolder={props.selectFolder}
            deleteFolder={props.deleteFolder}
            editFolder={props.editFolder}
            newFolder={props.newFolder === folder.id && true}
            resetNewFolder={props.resetNewFolder}
          />
        ))}
      </List>
    </Grid>
  );
};

export default SideBar;
