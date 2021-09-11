import {
  SelectInput,
  Filter,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
} from "ra-ui-materialui";

const ClassFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Class Label" source="classLabel" />
    <ReferenceInput source="cours" reference="courses">
      <SelectArrayInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput source="teacher" reference="teacher">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput source="formation" reference="formation">
      <SelectInput optionText="label" />
    </ReferenceInput>
  </Filter>
);
export default ClassFilter;
