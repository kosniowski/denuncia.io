import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
//import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
//import FormControl from "@material-ui/core/FormControl";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
//import Input from "@material-ui/core/Input";
//import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Navigation from "./Rutas/Ingreso";
import { Divider } from "react-md";
//import Facebook from "./Facebook";
import Autenticacion from "../componentes/Autenticacion";



const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    [theme.breakpoints.up(300 + theme.spacing.unit * 4 * 3)]: {
      width: 300,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "auto",
      marginBottom: "auto"
    }
  },
  paper: {
    elevation:"24",
    marginTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "15px",
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 2}px`
  },

  Avatar: {
   padding: "55px",
   backgroundColor: "teal",color: "teal"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 1
  }
});

function SignIn(props) {




  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <Divider></Divider>
        <Avatar className={classes.Avatar}>
          <img
              className="fisico"
              src= "favicon.ico"
              width="100px"
              height="auto"
              alt="fisico"
              aling="center"
            />
          </Avatar>
          <Typography component="h1" variant="h5" style={{color: "teal", fontWeight: "bold"}}>
            Bienvenido a Denuncia App
          </Typography>
          <Typography component="h7" variant="h7" style={{color: "teal", fontWeight: "bold"}}>
            Ingresa:
          </Typography>


          <Autenticacion />



            <Navigation  />

        </Paper>
      </main>
    </React.Fragment>

  );

}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(SignIn);
