import {
  BooleanInput,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Create,
  ReferenceInput,
} from "ra-ui-materialui";
import React from "react";

const UserCreate = (props) => {
  return (
    <Create title="create user" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phoneNumber" />
        <PasswordInput source="password" />
        <ReferenceInput source="city" reference="cities">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <SelectInput
          source="role"
          choices={[
            { id: "agent", name: "Agent" },
            { id: "admin", name: "Admin" },
          ]}
        />
        <BooleanInput source="isActivated" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
