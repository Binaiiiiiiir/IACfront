import {
  List,
  // ArrayField,
  BooleanField,
  ChipField,
  Datagrid,
  EmailField,
  SingleFieldList,
  TextField,
  // ReferenceManyField,
  ReferenceArrayField,
  ReferenceField,
} from "react-admin";

const ProspectList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceField label="City" source="city.id" reference="cities">
        <TextField source="name" />
      </ReferenceField>
      <EmailField source="email" />
      <TextField source="phoneNumber" />
      <BooleanField source="statu" />
      <ReferenceArrayField label="Courses" source="cours" reference="courses">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <TextField source="comment" />
    </Datagrid>
  </List>
);

export default ProspectList;
