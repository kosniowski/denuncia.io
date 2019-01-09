import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
//import SimpleMap from "../map";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          style={{ color: "teal" }}
          variant="extendedFab"
          onClick={this.handleClickOpen}
          position="100px"
          margin="100px"
        >
          Realizar Consulta
        </Button>
        <Dialog style={{margin:"1px"}}
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Requisitos para realizar el trámite:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <ul>
                <li> Cédula de ciudadanía</li>
                <li> Datos completos de la víctima</li>
              </ul>
              <h3
                id="speed-boost-description"
                className="md-color--secondary-text"
              >
                Puntos de atención
              </h3>
              <ul>
                <li>
                  <h3>C.A.L.I. 2</h3>
                  Avenida 3CN # 47 AN-18, Vipasa
                  <hr />
                  <Button
                    style={{ color: "teal" }}
                    variant="extendedFab"
                    href="https://goo.gl/maps/aJCXo6tyF9T2"
                  >
                    ver en mapas
                  </Button>
                </li>

                <li>
                  <h3>C.A.L.I. 10</h3>
                  Calle 14 B # 41A-25, El Guabal
                  <hr />
                  <Button
                    style={{ color: "teal" }}
                    variant="extendedFab"
                    href=" https://goo.gl/maps/pZ7atmk7esn"
                  >
                    ver en mapas
                  </Button>
                </li>
              </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ color: "teal" }}
              variant="extendedFab"
              onClick={this.handleClose}
            >
              Volver
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;
