import ProspectFilter from "./ProspectFilter";
import {
  List,
  // BooleanField,
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
  pending: { backgroundColor: "#adb5bd" },
  treated: { backgroundColor: "#ff8500" },
  student: { backgroundColor: "#1bc44b" },
}));

const ColoredChipField = (props) => {
  const classes = useStyles();

  const setStatusColor = () => {
    switch (props.record.status) {
      case "treated":
        return classes.treated;
      case "student":
        return classes.student;
      default:
        return classes.pending;
    }
  };
  return <ChipField className={setStatusColor()} {...props} />;
};
const ProspectList = (props) => {
  const classes = useStyles(props);

  return (
    <List
      bulkActionButtons={false}
      className={classes.root}
      filters={<ProspectFilter />}
      filterDefaultValues={{ status: "pending" }}
      sort={{ field: "RegisteredAt", order: "DESC" }}
      {...props}
    >
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
        <ColoredChipField source="status" label="Status" />
      </Datagrid>
    </List>
  );
};

export default ProspectList;
