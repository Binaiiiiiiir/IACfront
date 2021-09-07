import {
  ChipField,
  Datagrid,
  EmailField,
  List,
  ReferenceArrayField,
  SingleFieldList,
  TextField,
} from "ra-ui-materialui";
import TeacherFilter from "./TeacherFilter";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((palette) => ({
  root: {
    marginTop: "30px",
  },
}));

const TeacherList = (props) => {
  const classes = useStyles(props);

  return (
    <List className={classes.root} filters={<TeacherFilter />} {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='cin' />
        <TextField source='name' />
        <EmailField source='email' />
        <ReferenceArrayField
          sortable={false}
          label='Teaching'
          source='cours'
          reference='courses'
        >
          <SingleFieldList>
            <ChipField source='name' />
          </SingleFieldList>
        </ReferenceArrayField>
        <TextField source='phoneNumber' />
      </Datagrid>
    </List>
  );
};

export default TeacherList;
