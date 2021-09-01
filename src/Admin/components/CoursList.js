import React from "react";
import { Datagrid, List, TextField } from "react-admin";

const CoursList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='name' />
        <TextField source='coursType' label='Type' />
      </Datagrid>
    </List>
  );
};

export default CoursList;
