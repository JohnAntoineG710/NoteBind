import React from "react";
import Folder from "./Folder";
import CreateFolder from "./CreateFolder";
import { Grid, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    maxWidth: 360,
    maxHeight: "100%",
    overflow: "hidden",
    padding: 0,
    margin: 0,
  },
  root: {
    padding: "0 8px",
    maxHeight: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: "hidden",
  },
}));

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={3} lg={2} className={classes.root}>
      <CreateFolder addFolder={props.addFolder} />
      <List className={classes.list}>
        <SimpleBar style={{ maxHeight: "81vh", overflow: "auto" }}>
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
        </SimpleBar>
      </List>
    </Grid>
  );
};

export default SideBar;
