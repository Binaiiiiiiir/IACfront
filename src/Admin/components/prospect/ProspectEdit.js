import {
  SelectInput,
  Edit,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SimpleForm,
  RadioButtonGroupInput,
  TextInput,
} from "react-admin";

const ProspectEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="cours" reference="courses">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <RadioButtonGroupInput
          source="status"
          label="Status"
          choices={[
            { id: "pending", name: "Pending" },
            { id: "treated", name: "Treated" },
            { id: "student", name: "Student" },
          ]}
        />
        <TextInput source="comment" />
        <TextInput source="name" />
        <ReferenceInput label="City" source="city" reference="cities">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="email" />
        <TextInput source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
export default ProspectEdit;
