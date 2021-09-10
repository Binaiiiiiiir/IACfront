import {
  SelectInput,
  BooleanInput,
  Edit,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const ProspectEdit = (props) => {
  console.log(props);

  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="cours" reference="courses">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <BooleanInput source="statu" label="Status" />
        <TextInput source="comment" />
        <TextInput source="name" />
        <ReferenceInput label="City" source="city.id" reference="cities">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="email" />
        <TextInput source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
export default ProspectEdit;
