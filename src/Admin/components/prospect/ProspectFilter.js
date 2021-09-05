import {
  SelectInput,
  Filter,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "ra-ui-materialui";

const ProspectFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name" />
    <TextInput label="Email" source="email" />
    <TextInput label="Phone Number" source="phoneNumber" />
    <TextInput label="Comment" source="comment" />
    <SelectInput
      label="Status"
      source="statu"
      choices={[
        { id: true, name: "True" },
        { id: false, name: "False" },
      ]}
      allowEmpty
    />
    <ReferenceArrayInput source="cours" reference="courses">
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
  </Filter>
);
export default ProspectFilter;
