import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";

const StudentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label='cin' source='id' />
        <TextField source='name' />
        <TextField source='email' />
        <TextField source='phoneNumber' />
        <TextField array source='cours' />
        <ReferenceArrayField label='Tags' source='cours'>
          <SingleFieldList>
            <ChipField source='cours' />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default StudentList;
