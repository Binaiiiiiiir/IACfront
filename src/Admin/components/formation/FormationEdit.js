import { Edit, NumberInput, SimpleForm, TextInput } from "ra-ui-materialui";
import React from "react";

const FormationEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source='label' />
        <NumberInput source='price' />
        <TextInput multiline source='description' />
      </SimpleForm>
    </Edit>
  );
};

export default FormationEdit;
