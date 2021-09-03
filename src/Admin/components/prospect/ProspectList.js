import {
  List,
  ArrayField,
  BooleanField,
  ChipField,
  Datagrid,
  EmailField,
  SingleFieldList,
  TextField,
} from "react-admin";

const ProspectList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <TextField source='city.name' />
      <EmailField source='email' />
      <TextField source='phoneNumber' />
      <BooleanField source='statu' />
      <ArrayField source='cours'>
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ArrayField>
      <TextField source='comment' />
    </Datagrid>
  </List>
);

export default ProspectList;
