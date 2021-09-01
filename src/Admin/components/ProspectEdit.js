import {
  ArrayInput,
  BooleanInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const ProspectEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ArrayInput source="cours">
        <SimpleFormIterator>
          <TextInput source="name" />
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput source="statu" />
      <TextInput source="comment" />
      <TextInput source="name" />
      <TextInput source="city.name" />
      <TextInput source="email" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Edit>
);
export default ProspectEdit;
