import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Face from "@material-ui/icons/Face"
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import fisico from "../imagenes/fisico.jpg";
import emocional from "../imagenes/emocional.jpg";
import infantil from "../imagenes/infantil.jpg";
import economico from "../imagenes/economico.jpg";
import sexual from "../imagenes/sexual.jpg";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}





    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
     flexGrow: 2,

    display: "block",
    backgroundSize: "100%",
    background: "url(/img/wall.png)repeat-x",
    backgroundPosition: "bottom",
    backgroundColor: "#80cbc4",
    Height: "100%",
    width: "100%"
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs textColor="teal"
            scrollable
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            
            
          >
            <Tab label="Físico" icon={<PersonPinIcon />} />
            <Tab label="Emocional" icon={<FavoriteIcon />} />
            <Tab label="Infantíl" icon={<Face />} />
            <Tab label="Económico" icon={<HelpIcon />} />
            <Tab label="Sexual" icon={<ShoppingBasket />} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >


            <TabContainer display= "center">
          <Paper elevation={24} square={true}  style={{backgroundColor:"white", borderRadius:"10px", margin:"1px"}}>
            <h3 style={{textAlign:"center" , padding: "10px"}}>¿Cuál es su definición?</h3>

            <p  style={{textAlign:"justify", padding: "25px"}}>
              {" "}
              El maltrato físico incluye acciones como golpear, empujar,
              sacudir, abofetear, patear, pellizcar, asfixiar, estrangular y
              quemar. Es posible que el maltrato físico provenga de un extraño,
              de un conocido o de un amigo cercano o un familiar. Muchas
              víctimas de maltrato conocen a su atacante.
            </p>
            </Paper>
            <img style={{ aling:"center", borderRadius:"5px", marginLeft:"18%"}}

              className="fisico"
              src={fisico}
              width="65%"
              height="auto"
              alt="fisico"

            />
           <hr style={{border:"none"}}/>


           {/* boton de pdf */}

      
         <Button variant="fab" style={{color:"#F1543F"}}   href="https://www.oas.org/dil/esp/LEY_1257_DE_2008_Colombia.pdf" download="LEY1257DE2008.pdf"  target="_blank">
                                   

                                     <img

                                    src="./img/pdf.png"
                                    width="30px"
                                    height="auto"
                                    alt="pdf1"
                                    onClick={this.handleClickOpen}


                                    />

                                    </Button>
                                    <h3 style={{color:"white" }}>Presiona el icono de pdf con más información </h3>
       

                <hr style={{border:"none"}}/>


          </TabContainer>





          <TabContainer>
            <Paper elevation={24} square={true}  style={{backgroundColor:"white", borderRadius:"10px", margin:"1px"}}>
            <h2 style={{textAlign:"center", padding: "10px"}}>¿Cuál es su definición?</h2>

            <p style={{textAlign:"justify", padding: "10px"}}>
              {" "}
              El abuso emocional es el maltrato psicológico que una persona
              ejerce sobre otra. Este tipo de maltrato comprende actitudes,
              acciones y palabras, como las humillaciones, los insultos, los
              gestos de desaprobación, el aislamiento, la descalificación
              personal, las codependencias, etc.
            </p>
            </Paper>
            <img style={{ aling:"center", borderRadius:"5px", marginLeft:"18%"}}
              display="block"
              margin="auto"
              className="emocional"
              src={emocional}
              width="65%"
              height="auto"
              alt="emocional"

            />

  <hr style={{border:"none"}}/>

             {/* boton de pdf */}




             <Button variant="fab" style={{color:"#F1543F"}}   href="https://www.oas.org/dil/esp/LEY_1257_DE_2008_Colombia.pdf" download="LEY1257DE2008.pdf"  target="_blank">
                                   

                                     <img

                                    src="./img/pdf.png"
                                    width="30px"
                                    height="auto"
                                    alt="pdf1"
                                    onClick={this.handleClickOpen}


                                    />

                                    </Button>
                                    <h3 style={{color:"white" }}>Presiona el icono de pdf con más información </h3>
       
                <hr style={{border:"none"}}/>
          </TabContainer>



  <TabContainer>
            <Paper elevation={24} square={true}  style={{backgroundColor:"white", borderRadius:"10px", margin:"1px"}}>
            <h3 style={{textAlign:"center" , padding: "10px"}}>¿Cuál es su definición?</h3>
            <p style={{textAlign:"justify" , padding: "10px"}}>
              {" "}
              El maltrato infantil se define como los abusos y la desatención de
              que son objeto los menores de 18 años, e incluye todos los tipos
              de maltrato físico o psicológico, abuso sexual, desatención,
              negligencia y explotación comercial o de otro tipo que causen o
              puedan causar un daño a la salud, desarrollo o dignidad del niño,
              o poner en peligro su supervivencia, en el contexto de una
              relación de responsabilidad, confianza o poder.
            </p>
            </Paper>
            <img style={{ aling:"center", borderRadius:"5px", marginLeft:"18%"}}
              className="infantil"
              src={infantil}
              width="65%"
              height="auto"
              alt="infantil"
              aling="center"
            />
  <hr style={{border:"none"}}/>


   {/* boton de pdf */}




             <Button variant="fab" style={{color:"#F1543F"}}   href="https://www.oas.org/dil/esp/LEY_1257_DE_2008_Colombia.pdf" download="LEY1257DE2008.pdf"  target="_blank">
                                   

                                     <img

                                    src="./img/pdf.png"
                                    width="30px"
                                    height="auto"
                                    alt="pdf1"
                                    onClick={this.handleClickOpen}


                                    />

                                    </Button>
                                    <h3 style={{color:"white" }}>Presiona el icono de pdf con más información </h3>
       
                <hr style={{border:"none"}}/>
          </TabContainer>




        <TabContainer>
             <Paper elevation={24} square={true}  style={{backgroundColor:"white", borderRadius:"10px", margin:"1px"}}>
            <h3 style={{textAlign:"center", padding: "10px"}}>¿Cuál es su definición?</h3>

            <p style={{textAlign:"justify", padding: "10px"}}>
              {" "}
              Abuso económico es una forma de abuso cuando una de las dos partes
              implicadas en una pareja tiene control sobre la otra en el acceso
              a los recursos económicos,1​ lo que disminuye la capacidad de la
              víctima de mantenerse a sí misma y la obliga a depender
              financieramente del perpetrador.
            </p>
            </Paper>
            <img style={{ aling:"center", borderRadius:"5px", marginLeft:"18%"}}
              className="economico"
              src={economico}
              width="65%"
              height="auto"
              alt="economico"
              aling="center"
            />
  <hr style={{border:"none"}}/>
             {/* boton de pdf */}



 {/* boton de pdf */}




             <Button variant="fab" style={{color:"#F1543F"}}   href="https://www.oas.org/dil/esp/LEY_1257_DE_2008_Colombia.pdf" download="LEY1257DE2008.pdf"  target="_blank">
                                   

                                     <img

                                    src="./img/pdf.png"
                                    width="30px"
                                    height="auto"
                                    alt="pdf1"
                                    onClick={this.handleClickOpen}


                                    />

                                    </Button>
                                    <h3 style={{color:"white" }}>Presiona el icono de pdf con más información </h3>
       
                <hr style={{border:"none"}}/>
          </TabContainer>  



       


          <TabContainer>
            <Paper elevation={24} square={true}  style={{backgroundColor:"white", borderRadius:"10px", margin:"1px"}}>
            <h3 style={{textAlign:"center", padding: "10px"}}>¿Cuál es su definición?</h3>

            <p style={{textAlign:"justify", padding: "10px"}}>
              {" "}
              El abuso sexual se refiere a cualquier acción que presiona u
              obliga a alguien a hacer algo sexualmente que no quiere hacer.
              También puede referirse al comportamiento que afecta la habilidad
              de la persona de controlar su actividad sexual o las
              circunstancias bajo las cuales ocurre la actividad sexual. Esto
              incluye el sexo oral, la violación o impedir el acceso a métodos
              anticonceptivos y condones.
            </p>
            </Paper>
            <img style={{ aling:"center", borderRadius:"5px", marginLeft:"18%"}}
              className="sexual"
              src={sexual}
              width="65%"
              height="auto"
              alt="sexual"
              aling="center"
            />
              <hr style={{border:"none"}}/>
           {/* boton de pdf */}




             <Button variant="fab" style={{color:"#F1543F"}}   href="https://www.oas.org/dil/esp/LEY_1257_DE_2008_Colombia.pdf" download="LEY1257DE2008.pdf"  target="_blank">
                                   

                                     <img

                                    src="./img/pdf.png"
                                    width="30px"
                                    height="auto"
                                    alt="pdf1"
                                    onClick={this.handleClickOpen}


                                    />

                                    </Button>
                                    <h3 style={{color:"white" }}>Presiona el icono de pdf con más información </h3>
       
                <hr style={{border:"none"}}/>
          </TabContainer>


        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
