import {
  SelectInput,
  Filter,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
  ReferenceInput,
} from "ra-ui-materialui";

const ProspectFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Name' source='name' />
    <TextInput label='Email' source='email' />
    <TextInput label='Phone Number' source='phoneNumber' />
    <TextInput label='Comment' source='comment' />
    <SelectInput
      label='Status'
      source='statu'
      choices={[
        { id: true, name: "True" },
        { id: false, name: "False" },
      ]}
      allowEmpty
    />
    <ReferenceArrayInput source='cours' reference='courses'>
      <SelectArrayInput optionText='name' />
    </ReferenceArrayInput>
    <ReferenceInput source='city' reference='cities'>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);
export default ProspectFilter;
