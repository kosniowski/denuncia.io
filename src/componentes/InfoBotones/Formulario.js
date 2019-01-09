import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import AlertDialogSlide from "../InfoBotones/Respuesta1";
import { Paper } from "react-md";
import HelpIcon from "@material-ui/icons/Help";
import Button from "@material-ui/core/Button";
//import FullScreenDialog from "../Botones/Botonpdf";

const styles = theme => ({
  h3: {

    padding: 10,
  },
  root: {
    display: "block",
    backgroundSize: "50%",
    background: "url(/img/wall.png)repeat-x",
    backgroundPosition: "bottom",
    backgroundColor: "#80cbc4",
    minHeight: "100%"
  },
  formControl: {
    margin: theme.spacing.unit * 2,
    minWidth: 200,
    marginLeft: 100,
    marginRight: 200,

  },

  alerta: {
    marginLeft: 80,
    marginRight: 80,
    padding: 30,
    marginTop: 50,
    minWidth: 200
  },
  Divider:{
    margin: theme.spacing.unit * 2,
    minWidth: 200,
    marginLeft: 100,
    marginRight: 200,
  }
});

class NativeSelects extends React.Component {
  state = {
    tipo: "",
    sexo: "",
    edad: "",
    cmn: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper  elevation={24} square={true} style={{backgroundColor:"white", borderRadius:"25px", margin:"20px"}}>
          <h3 className={classes.h3}>
            <HelpIcon style={{ display: "center", color: " teal" }} /> A
            continuación puede realizar sus consultas dependiendo el tipo de
            maltrato:{" "}
          </h3>

        </Paper>
        <Paper  elevation={24} square={true} style={{backgroundColor:"white", borderRadius:"25px", margin:"20px"}}>
        <FormControl className={classes.formControl} >
          <InputLabel variant="outlined" htmlFor="outlined-age-native-helper" >
            Tipo Maltrato
          </InputLabel>
          <NativeSelect

            value={this.state.tipo}
            onChange={this.handleChange("tipo")}
            input={<Input name="tipo" id="age-native-helper" />}
          >
            <option value="Seleccione" />
            <option value={10}>Físico</option>
            <option value={20}>Psicológico</option>
            <option value={30}>Económico</option>
          </NativeSelect>
        </FormControl>

        {/* Boton 2 */}

        <FormControl className={classes.formControl}>
          <InputLabel variant="filled" htmlFor="age-native-helper">
            Sexo
          </InputLabel>
          <NativeSelect
            value={this.state.sexo}
            onChange={this.handleChange("sexo")}
            input={<Input name="sexo" id="age-native-helper" />}
          >
            <option value="Seleccione" />
            <option value={10}>Masculino</option>
            <option value={20}>Femenino</option>
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel variant="filled" htmlFor="age-native-helper">
            Rango de Edad
          </InputLabel>
          <NativeSelect
            value={this.state.edad}
            onChange={this.handleChange("edad")}
            input={<Input name="edad" id="age-native-helper" />}
          >
            <option value="Seleccione" />
            <option value={10}>De 0 a 17 años</option>
            <option value={20}>De 18 a 30 años</option>
            <option value={30}>De 31 a 64 años</option>
            <option value={40}>Más de 65 años</option>
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel variant="filled" htmlFor="age-native-helper">
            Comuna
          </InputLabel>
          <NativeSelect
            value={this.state.cmn}
            onChange={this.handleChange("cmn")}
            input={<Input name="cmn" id="age-native-helper" />}
          >
            <option value="Seleccione" />
            <option value={20}>2</option>
            <option value={30}>10</option>

          </NativeSelect>
          <hr style={{color:"transparent"}}></hr>
          <AlertDialogSlide  variant="extendedFab" />
        </FormControl>

        <Paper className={classes.formControl} >

                  <Button variant="extendedFab"  style={{color:"#F1543F"}}   href="http://weblog.emcali.net.co/contenidos_weblog/Comunas%20y%20Barrios%20de%20Cali.pdf" download="LEY1257DE2008.pdf"  target="_blank">
                                    <img

                                   src="./img/pdf.png"
                                   width="40px"
                                   height="auto"
                                   alt="pdf1"
                                   onClick={this.handleClickOpen}

                                   ></img>
                                   <p style={{color:"teal" }}>¿A qué comuna pertenece tu barrio? </p>

                                   </Button>
                                   

       
       <p style={{color:"teal"}}>Fuente:Emcali</p>
               <hr style={{border:"none"}}/>
        </Paper>
           




        </Paper>

      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NativeSelects);
