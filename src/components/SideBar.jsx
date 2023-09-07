import React from "react";
import { styled } from '@mui/material/styles';
import Folder from "./Folder";
import CreateFolder from "./CreateFolder";
import { Grid, List } from "@mui/material";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const PREFIX = 'SideBar';

const classes = {
  list: `${PREFIX}-list`,
  root: `${PREFIX}-root`
};

const StyledGrid = styled(Grid)((
  {
    theme
  }
) => ({
  [`& .${classes.list}`]: {
    width: "100%",
    maxWidth: 360,
    maxHeight: "100%",
    overflow: "hidden",
    padding: 0,
    margin: 0,
  },

  [`&.${classes.root}`]: {
    padding: "0 8px",
    maxHeight: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: "hidden",
  }
}));

const SideBar = (props) => {

  return (
    <StyledGrid item xs={3} lg={2} className={classes.root}>
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
    </StyledGrid>
  );
};

export default SideBar;
