import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 9,
    display: "block",
    backgroundSize: "100%",
    backgroundColor: "#80cbc4",

    height:"100%"
  },
  titulo:{
    textAlign: "center"
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div style={{  background: "url(/img/wall.png)repeat-x",backgroundPosition: "bottom" }}>


      <Paper className={classes.root} elevation={3} square={false} style={{backgroundColor:"white", borderRadius:"25px", margin:"20px", color:"teal"}}>
        <Typography component="h3" style={{ textSizeAdjust: "500px" }}>
          Según lo establecido por la constitución política de Colombia de 1991
          la cual en el artículo número 15 cita, “Todas las personas tienen
          derecho a su intimidad personal y familiar y a su buen nombre, y el
          Estado debe respetarlos y hacerlos respetar. (…) En la recolección,
          tratamiento y circulación de datos se respetarán la libertad y demás
          garantías consagradas en la Constitución.” Los datos personales deben
          ser respetados en todo el territorio nacional y se debe informar al
          usuario que su información va a ser usada de manera legal y estará
          segura siempre. Para la manipulación de la información personal
          almacenada en diferentes bases de datos digitales o físicas, es estado
          colombiano dispone de leyes establecidas las cuales son claras a
          expresar, cuál es el manejo de esta información y las definiciones de
          la misma.
          <p>
            Así pues, la información de todo colombiano tiene como estructura de
            manipulación las siguientes partes:
          </p>

          <ul>
            <li>
              {" "}
              Titular de la información: es el individuo a la que se refiere la
              información, y está sujeto por consiguiente a los derechos y
              deberes de toda persona natural o jurídica.
            </li>
            <li>
              Fuente de información: es la persona, organización o entidad que
              conoce los datos de los titulares de la información, y que ante
              cualquier trámite legal brinda a el operador de la información los
              datos necesarios en el momento que se necesiten.
            </li>

            <li>
              {" "}
              Operador de información: es la persona, entidad u organización que
              recibe la fuente de datos y los pone bajo conocimiento de los
              usuarios según los parámetros de la ley.
            </li>

            <li>
              Usuario: es la persona natural o jurídica que puede acceder a la
              información de uno o varios usuarios, esto, según las
              circunstanciadas en donde la ley lo permita.
            </li>
          </ul>

        </Typography>

      </Paper>

    </div>

  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
