import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  // ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ReferenceManyField,
  // ArrayField,
  // ReferenceField,
} from "react-admin";

const StudentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='name' />
        <TextField source='email' />
        <TextField source='phoneNumber' />
        <ReferenceManyField
          label='Comments by'
          reference='courses'
          target='courses.id'
        >
          <SingleFieldList>
            <ChipField source='' />
          </SingleFieldList>
        </ReferenceManyField>
        <TextField source='statu' />
        <TextField label='City' source='city.name' />
        <TextField source='comment' />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default StudentList;
