import { Filter, TextInput } from "ra-ui-materialui";
import React from "react";

const FormationFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label='Label' source='label' />
      <TextInput label='Description' source='description' />
    </Filter>
  );
};

export default FormationFilter;
