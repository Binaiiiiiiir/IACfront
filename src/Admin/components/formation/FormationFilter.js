import { Filter, NumberInput, TextInput } from "ra-ui-materialui";
import React from "react";

const FormationFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label='Label' source='label' />
      <TextInput label='Description' source='description' />
      <NumberInput label='Price' source='price' />
    </Filter>
  );
};

export default FormationFilter;
