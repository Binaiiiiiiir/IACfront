import { Edit, SimpleForm, TextInput } from "ra-ui-materialui";

const StudentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="student.name" label="Name" disabled />
    </SimpleForm>
  </Edit>
);

export default StudentEdit;
