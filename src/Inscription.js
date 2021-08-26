import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  MuiThemeProvider,
  createMuiTheme,
  createTheme,
} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import logo from "./img/logoiac.png";
import bginsc from "./img/bginscription.png";
import { lightBlue, teal } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

import {
  CardMedia,
  FormControl,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const background = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          // backgroundColor: "#c9e9f6",
          background: `url(${bginsc}) `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

const BlueCheckbox = withStyles({
  root: {
    color: lightBlue[400],
    "&$checked": {
      color: lightBlue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const TealCheckbox = withStyles({
  root: {
    color: teal[400],
    "&$checked": {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CustomField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: lightBlue[600],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: lightBlue[600],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: lightBlue[400],
      },
      "&:hover fieldset": {
        borderColor: lightBlue[800],
      },

      "&.Mui-focused fieldset": {
        borderColor: lightBlue[400],
      },
    },
  },
})(TextField);

const CustomSelect = withStyles({
  root: {
    "& label.Mui-focused": {
      color: lightBlue[600],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: lightBlue[600],
    },
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {
    //     borderColor: lightBlue[400],
    //   },
    //   "&:hover fieldset": {
    //     borderColor: lightBlue[800],
    //   },

    //   "&.Mui-focused fieldset": {
    //     borderColor: lightBlue[400],
    //   },
    // },
    // "MuiSelect-root MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"
  },
})(Select);

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: "15px",
    overflow: "hidden",
    border: "white 1px solid",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.6)",
  },
  gridcolumn: {},
  legend: {
    marginTop: "1em",
  },
  checks: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr ",
  },
  right: {
    background: "#fff",
    padding: "40px 30px",
    // width: "50%",
    gridRowGap: "16px",
  },
  left: {
    backgroundColor: "rgba(10,170,188,1)",
    width: "50%",
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
  },
  formside: {},
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#0aaabc",
  },
}));

const Inscription = () => {
  const classes = useStyles();
  console.log(bginsc);
  return (
    <MuiThemeProvider theme={background}>
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Grid container className={classes.container}>
              <Hidden only={["xs"]}>
                <Grid className={classes.left} container sm={6}>
                  <Grid item xs={12} sm={12}></Grid>
                  <Grid alignItems="center" item xs={12}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      zoom
                      image={logo}
                    />
                  </Grid>
                </Grid>
              </Hidden>
              <Grid className={classes.right} container sm={6}>
                <Grid item xs={12}>
                  <Typography
                    color="textSecondary"
                    align="center"
                    component="h1"
                    variant="h4"
                  >
                    Inscription
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    id="firstName"
                    label="First Name"
                    autoFocus
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant="outlined"
                    required
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      City
                    </InputLabel>
                    <Select native required fullWidth label="Ville">
                      <option aria-label="None" value="" />
                      <option value={10}>Autres</option>
                      <option value={10}>Rabat</option>
                      <option value={20}>Tanger</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant="outlined"
                    required
                    fullWidth
                    id="phone"
                    label="Phone number"
                    name="Phone "
                    autoComplete="Phone"
                  />
                </Grid>
                {/* sselect section */}

                <Grid container xs={12}>
                  <FormLabel component="legend" className={classes.legend}>
                    Langues
                  </FormLabel>
                  <Grid xs={12} className={classes.checks} container>
                    <FormControlLabel
                      control={<BlueCheckbox name="French" />}
                      label="French"
                    />

                    <FormControlLabel
                      control={<BlueCheckbox name="German" />}
                      label="German"
                    />
                    <FormControlLabel
                      control={<BlueCheckbox name="Spanich" />}
                      label="Spanish"
                    />

                    <FormControlLabel
                      control={<BlueCheckbox name="English" />}
                      label="English"
                    />

                    <FormControlLabel
                      control={<BlueCheckbox name="Korean" />}
                      label="Korean"
                    />
                  </Grid>

                  <FormLabel className={classes.legend} component="legend">
                    Certificat
                  </FormLabel>
                  <Grid xs={12} className={classes.checks} container>
                    <FormControlLabel
                      control={
                        <TealCheckbox
                          // color={theme.palette.primary}
                          name="checkedB"
                        />
                      }
                      label="DELE"
                    />
                    <FormControlLabel
                      control={<TealCheckbox name="checkedB" />}
                      label="DALF"
                    />
                    <FormControlLabel
                      control={<TealCheckbox name="checkedA" />}
                      label="TEF"
                    />

                    <FormControlLabel
                      control={<TealCheckbox name="checkedB" />}
                      label="TCF"
                    />
                    <FormControlLabel
                      control={<TealCheckbox name="checkedA" />}
                      label="IELTS"
                    />
                    <FormControlLabel
                      control={<TealCheckbox name="checkedA" />}
                      label="TOEFL"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </MuiThemeProvider>
  );
};

export default Inscription;
