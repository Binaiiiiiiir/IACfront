import React from "react";
import {
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "ra-ui-materialui";

const UserFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phoneNumber" />
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
    </Filter>
  );
};

export default UserFilter;
