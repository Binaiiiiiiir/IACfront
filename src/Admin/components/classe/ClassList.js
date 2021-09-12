import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "ra-ui-materialui";
import ClassFilter from "./ClassFilter";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((palette) => ({
  root: {
    marginTop: "30px",
  },
}));
const ClassList = (props) => {
  const classes = useStyles(props);

  return (
    <List
      bulkActionButtons={false}
      className={classes.root}
      filters={<ClassFilter />}
      {...props}
    >
      <Datagrid rowClick="edit">
        <TextField source="classLabel" label="Class Label" />
        <ReferenceField
          sortable={false}
          source="formation"
          reference="formation"
        >
          <TextField source="label" />
        </ReferenceField>
        <ReferenceField sortable={false} source="teacher" reference="teacher">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField sortable={false} source="cours" reference="courses">
          <TextField source="name" />
        </ReferenceField>
        <NumberField source="studentsNumber" />
      </Datagrid>
    </List>
  );
};

export default ClassList;
