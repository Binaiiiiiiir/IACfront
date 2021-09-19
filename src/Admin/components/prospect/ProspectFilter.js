import {
  SelectInput,
  Filter,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
  ReferenceInput,
  DateInput,
} from "ra-ui-materialui";

const ProspectFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name" />
    <TextInput label="Email" source="email" />
    <TextInput label="Phone Number" source="phoneNumber" />
    <TextInput label="Comment" source="comment" />
    <SelectInput
      label="Status"
      source="status"
      choices={[
        { id: "pending", name: "Pending" },
        { id: "treated", name: "Treated" },
        { id: "student", name: "Student" },
      ]}
      allowEmpty
      alwaysOn
    />
    <ReferenceArrayInput source="cours" reference="courses">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
    <ReferenceInput source="city" label="City" reference="cities">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <DateInput source="RegisteredAt" />
  </Filter>
);
export default ProspectFilter;
