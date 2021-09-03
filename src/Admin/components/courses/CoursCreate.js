import React from "react";
import {
  Create,
  RadioButtonGroupInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const CoursCreate = (props) => {
  return (
    <Create title='create cours' {...props}>
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
    </Create>
  );
};

export default CoursCreate;
