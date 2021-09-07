import { Create, NumberInput, SimpleForm, TextInput } from "ra-ui-materialui";
import React from "react";

const FormationCreate = (props) => {
  return (
    <Create title='create formation' {...props}>
      <SimpleForm>
        <TextInput source='label' />
        <NumberInput source='priceMounth' label='Price by month' />
        <NumberInput source='priceFormation' label='Price by Formation' />
        <TextInput multiline source='description' />
      </SimpleForm>
    </Create>
  );
};

export default FormationCreate;
