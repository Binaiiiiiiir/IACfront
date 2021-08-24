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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import logo from "./img/logoiac.png";
import blue from "@material-ui/core/colors/blue";

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
          background: "-webkit-linear-gradient(top, #0aaabc, #0dcee4)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: "15px",
    overflow: "hidden",
    border: "white 1px solid",
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
    // borderRadius: "0 25px 25px 0",
    padding: "20px 40px",
    width: "50%",
    gridRowGap: "16px",
  },
  left: {
    // borderRadius: "25px 0 0 25px",
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
    marginTop: theme.spacing(3),
  },
  formside: {},
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#0aaabc",
  },
}));

const Inscription = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={background}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Grid container className={classes.container}>
              <Hidden only={["xs"]}>
                <Grid className={classes.left} container sm={6}>
                  <Grid item xs={12} sm={12}></Grid>
                  <Grid alignItems='center' item xs={12}>
                    <CardMedia
                      component='img'
                      alt='Contemplative Reptile'
                      zoom
                      image={logo}
                    />
                  </Grid>
                </Grid>
              </Hidden>
              <Grid className={classes.right}   container sm={6}>
                <Grid item xs={12} alignItem='center' sm={12}>
                  <Typography component='h1' variant='h5'>
                    Inscription
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='lname'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='cin'
                    label='CIN'
                    name='cin'
                    autoComplete='cin'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='phone'
                    label='Phone number'
                    name='Phone '
                    autoComplete='Phone'
                  />
                </Grid>
                {/* sselect section */}
                {/* <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Age
                    </InputLabel>
                    <Select native required fullWidth label='Age'>
                      <option aria-label='None' value='' />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid> */}
                <Grid container xs={12}>
                  <FormLabel component='legend' className={classes.legend}>
                    Langues
                  </FormLabel>
                  <Grid xs={12} className={classes.checks} container>
                    <FormControlLabel
                      control={
                        <Checkbox color='palette.info.main' name='French' />
                      }
                      label='French'
                    />

                    <FormControlLabel
                      control={<Checkbox name='German' />}
                      label='German'
                    />
                    <FormControlLabel
                      control={<Checkbox name='Spanich' />}
                      label='Spanich'
                    />

                    <FormControlLabel
                      control={<Checkbox name='English' />}
                      label='English'
                    />

                    <FormControlLabel
                      control={<Checkbox name='Korean' />}
                      label='Korean'
                    />
                  </Grid>

                  <FormLabel className={classes.legend} component='legend'>
                    Certificat
                  </FormLabel>
                  <Grid xs={12} className={classes.checks} container>
                    <FormControlLabel
                      control={<Checkbox color='info.main' name='checkedB' />}
                      label='DELE'
                    />
                    <FormControlLabel
                      control={<Checkbox name='checkedB' />}
                      label='DLF'
                    />
                    <FormControlLabel
                      control={<Checkbox name='checkedA' />}
                      label='TEF'
                    />

                    <FormControlLabel
                      control={<Checkbox name='checkedB' />}
                      label='TCF'
                    />
                    <FormControlLabel
                      control={<Checkbox name='checkedA' />}
                      label='IELTS'
                    />
                    <FormControlLabel
                      control={<Checkbox name='checkedA' />}
                      label='TOEFL'
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
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
