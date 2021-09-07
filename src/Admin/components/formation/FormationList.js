import {
  Datagrid,
  DeleteButton,
  List,
  NumberField,
  TextField,
} from "ra-ui-materialui";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import FormationFilter from "./FormationFilter";
const useStyles = makeStyles((palette) => ({
  root: {
    marginTop: "30px",
  },
}));

const FormationList = (props) => {
  const classes = useStyles(props);
  return (
    <List filters={<FormationFilter />} className={classes.root} {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='label' />
        <NumberField source='price' />
        <NumberField source='description' />
        <DeleteButton basePath='formation' />
      </Datagrid>
    </List>
  );
};

export default FormationList;
