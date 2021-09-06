import {
  Edit,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from "ra-ui-materialui";
import React from "react";

const EditTeacher = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source='cin' />
        <TextInput source='name' />
        <ReferenceArrayInput source='cours' reference='courses'>
          <SelectArrayInput optionText='name' />
        </ReferenceArrayInput>
        <TextInput source='email' />
        <TextInput source='phoneNumber' />
      </SimpleForm>
    </Edit>
  );
};

export default EditTeacher;
