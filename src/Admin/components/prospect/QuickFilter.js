import { makeStyles, Chip } from "@material-ui/core";
import { useTranslate } from "ra-core";

const useQuickFilterStyles = makeStyles((theme) => ({
  chip: {
    marginBottom: theme.spacing(1),
  },
}));
const QuickFilter = ({ label }) => {
  const translate = useTranslate();
  const classes = useQuickFilterStyles();
  return <Chip className={classes.chip} label={translate(label)} />;
};

export default QuickFilter;
