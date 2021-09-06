import React from "react";
import {
  Filter,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "ra-ui-materialui";

const TeacherFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label='Name' source='name' />
      <TextInput label='Email' source='email' />
      <TextInput label='CIN' source='cin' />
      <TextInput label='Phone Number' source='phoneNumber' />
      <ReferenceArrayInput source='cours' reference='courses'>
        <SelectArrayInput optionText='name' />
      </ReferenceArrayInput>
    </Filter>
  );
};

export default TeacherFilter;
