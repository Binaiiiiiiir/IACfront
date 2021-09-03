import React from "react";
import {
  Edit,
  RadioButtonGroupInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const UpdateCours = (props) => {
  return (
    <Edit title='create cours' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <RadioButtonGroupInput
          aria-label='cours type'
          source='coursType'
          choices={[
            { id: "certificate", name: "Certificate" },
            { id: "langue", name: "Langue" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default UpdateCours;
