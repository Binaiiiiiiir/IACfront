import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

const CoursList = (props) => {
  return (
    <List {...props}>
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
