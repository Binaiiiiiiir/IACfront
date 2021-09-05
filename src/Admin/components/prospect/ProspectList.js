import ProspectFilter from "./ProspectFilter";
import {
  List,
  BooleanField,
  ChipField,
  Datagrid,
  EmailField,
  SingleFieldList,
  TextField,
  DateField,
  ReferenceArrayField,
  ReferenceField,
} from "react-admin";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((palette) => ({
  root: {
    marginTop: "30px",
  },
}));
const ProspectList = (props) => {
  const classes = useStyles(props);
  return (
    <List
      className={classes.root}
      filters={<ProspectFilter />}
      sort={{ field: "RegisteredAt", order: "DESC" }}
      {...props}
    >
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <ReferenceField
          sortable={false}
          label="City"
          source="city.id"
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
        <BooleanField source="statu" label="Status" />
      </Datagrid>
    </List>
  );
};

export default ProspectList;
