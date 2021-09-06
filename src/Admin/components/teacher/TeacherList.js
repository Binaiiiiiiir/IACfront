import {
  ChipField,
  Datagrid,
  EmailField,
  List,
  ReferenceArrayField,
  SingleFieldList,
  TextField,
} from "ra-ui-materialui";

const TeacherList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='cin' />
      <TextField source='name' />
      <EmailField source='email' />
      <ReferenceArrayField label='Studying' source='cours' reference='courses'>
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ReferenceArrayField>
      <TextField source='phoneNumber' />
    </Datagrid>
  </List>
);

export default TeacherList;
