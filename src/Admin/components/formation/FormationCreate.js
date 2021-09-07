import { Create, NumberInput, SimpleForm, TextInput } from "ra-ui-materialui";
import React from "react";

const FormationCreate = (props) => {
  return (
    <Create title='create formation' {...props}>
      <SimpleForm>
        <TextInput source='label' />
        <TextInput multiline source='description' />
        <NumberInput source='price' />
      </SimpleForm>
    </Create>
  );
};

export default FormationCreate;
