import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "ra-ui-materialui";
import ClassFilter from "./ClassFilter";

const ClassList = (props) => (
  <List filters={<ClassFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="classLabel" label="Class Label" />
      <ReferenceField source="formation" reference="formation">
        <TextField source="label" />
      </ReferenceField>
      <ReferenceField source="teacher" reference="teacher">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="cours" reference="courses">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="studentsNumber" />
    </Datagrid>
  </List>
);

export default ClassList;
