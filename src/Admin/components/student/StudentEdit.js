import {
  DateInput,
  Edit,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "ra-ui-materialui";

const StudentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Name" />
      <TextInput source="email" label="Email" />
      <TextInput source="phoneNumber" label="Phone Number" />
      <TextInput source="comment" label="Comment" />
      <DateInput source="RegisteredAt" label="Registered At" />
      <ReferenceInput source="city" reference="cities">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceArrayInput source="cours" reference="courses">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export default StudentEdit;
