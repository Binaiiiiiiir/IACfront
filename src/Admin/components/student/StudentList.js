import StudentFilter from "./StudentFilter";
import {
  Datagrid,
  TextField,
  EmailField,
  List,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  DateField,
} from "ra-ui-materialui";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((palette) => ({
  root: {
    marginTop: "30px",
  },
}));
const StudentList = (props) => {
  const classes = useStyles(props);

  return (
    <List className={classes.root} filters={<StudentFilter />} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <ReferenceField
          sortable={false}
          label="City"
          source="city"
          reference="cities"
        >
          <TextField source="name" />
        </ReferenceField>
        <EmailField source="email" />
        <TextField source="phoneNumber" />
        <ReferenceArrayField
          sortable={false}
          label="Courses"
          source="cours"
          reference="courses"
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <DateField source="RegisteredAt" showTime />
        <TextField source="comment" />
      </Datagrid>
    </List>
  );
};

export default StudentList;
