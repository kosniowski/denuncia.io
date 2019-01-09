import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Divider } from "react-md";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "block",
    backgroundSize: "50%",
    background: "url(/img/wall.png)repeat-x",
    backgroundPosition: "bottom",
    backgroundColor: "#80cbc4",
    minHeight: "100%"
  },
  text: {
    align: "center"
  },

  paper1:{
    elevation:"24",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "block",
    backgroundSize: "50%",
    minHeight: "100%",
    align: "center"
  },
  titulo:{
   textAlign: "center"

  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div style={{ background: "teal" }}>
      <Paper className={classes.paper1} elevation={24} square={false}  style={{backgroundColor:"white", borderRadius:"25px", margin:"20px"}}>
        <Typography className={classes.titulo}  variant="h5" component="h3">
          Version 1.0.
        </Typography>
      </Paper>

      <Paper className={classes.root} elevation={3} square={false}>
        <Typography className={classes.text}>
          <h2 className={classes.paper1} style={{ textAlign: "center", color: "teal" , backgroundColor:"white", borderRadius:"25px", margin:"20px", textOverflow:"25px" }}>
            {" "}
            Prototipo funcional del aplicativo Web
          </h2>
          <Divider color="teal" />

          <h2 className={classes.paper1} style={{ textAlign: "center", color: "white" , backgroundColor:"teal", borderRadius:"25px", margin:"20px", textOverflow:"25px" }}>Realizado por:</h2>{" "}

          <h2 className={classes.paper1} style={{ textAlign: "center", color: "teal" , backgroundColor:"white", borderRadius:"25px", margin:"20px", textOverflow:"25px" }}>
          <span>
            <img

              src= "./img/yo.png"
              width="65px"
              height="65px"
              alt="fisico"
              display= "float"
              align= "center"
            />
        </span>
        <Divider></Divider>
            Camilo Aljoscha Kosniowski Marquez. <h3>ID: 477043</h3>
          </h2>
          <Divider color="teal" />
          <h2 className={classes.paper1} style={{ textAlign: "center", color: "white" , backgroundColor:"teal", borderRadius:"25px", margin:"20px", textOverflow:"25px" }}>Creado utilizando:</h2>{" "}
          <p className={classes.paper1} style={{ textAlign: "center", color: "teal" , backgroundColor:"white", borderRadius:"25px", margin:"20px", textOverflow:"25px" }}>
            Reactjs, HTML, CSS, JavaScript. Utilizando las plataformas Firebase
            y Facebook Auth para el proceso de almacenamiento de datos. El
            proyecto es de codigo libre.{" "}
          </p>
          <Divider color="teal" />
          <h2 className={classes.paper1} style={{ textAlign: "center", color: "white" , backgroundColor:"teal", borderRadius:"25px", margin:"20px", textOverflow:"25px" }}>Utilización:</h2>{" "}
          <p className={classes.paper1} style={{ textAlign: "center", color: "teal" , backgroundColor:"white", borderRadius:"25px", margin:"20px", textOverflow:"25px" }}>Optar por el titulo de Tecnólogo en informática </p>
          <Divider color="teal" />
          <h2 className={classes.paper1} style={{ textAlign: "center", color: "white" , backgroundColor:"teal", borderRadius:"25px", margin:"20px", textOverflow:"25px" }}>Corporación Universitaria Minuto de Dios 2018</h2>
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
