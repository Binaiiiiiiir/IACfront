import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { ReferenceArrayInput, SelectArrayInput } from "ra-ui-materialui";
const CreateTeacher = (props) => {
  return (
    <Create title='Create teacher' {...props}>
      <SimpleForm>
        <TextInput source='cin' />
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput source='phoneNumber' />
        <ReferenceArrayInput source='cours' reference='courses'>
          <SelectArrayInput optionText='name' />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateTeacher;
