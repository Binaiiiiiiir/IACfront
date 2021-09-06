import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";
import CoursesFilter from "./CoursesFilter";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((palette) => ({
  root: {
    marginTop: "30px",
  },
}));

const CoursList = (props) => {
  const classes = useStyles(props);
  return (
    <List className={classes.root} filters={<CoursesFilter />} {...props}>
      <Datagrid>
        <TextField source='name' />
        <TextField source='coursType' label='Type' />
        <EditButton basePath='/courses' />
        <DeleteButton basePath='/courses' />
      </Datagrid>
    </List>
  );
};

export default CoursList;
