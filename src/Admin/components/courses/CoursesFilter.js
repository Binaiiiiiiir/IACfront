import { SelectInput, Filter, TextInput } from "ra-ui-materialui";

const CoursesFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Name' source='name' />

    <SelectInput
      label='Cours Type'
      source='coursType'
      choices={[
        { id: "langue", name: "Langue" },
        { id: "certificate", name: "Certificate" },
      ]}
      allowEmpty
    />
  </Filter>
);
export default CoursesFilter;
