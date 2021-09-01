import React from "react";
import { Datagrid, List, TextField } from "react-admin";

const CityList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='name' />
      </Datagrid>
    </List>
  );
};

export default CityList;
