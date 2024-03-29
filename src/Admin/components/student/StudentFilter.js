import {
  SelectInput,
  Filter,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
  ReferenceInput,
  DateInput,
} from "ra-ui-materialui";

const StudentFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name" />
    <TextInput label="Email" source="email" />
    <TextInput label="Phone Number" source="phoneNumber" />
    <TextInput label="Comment" source="comment" />
    <ReferenceArrayInput source="cours" reference="courses">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
    <ReferenceInput source="city" reference="cities">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <DateInput source="RegisteredAt" />
  </Filter>
);
export default StudentFilter;
