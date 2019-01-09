import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import PaperSheet from "../InfoBotones/Proteccion";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  Avatar: {
    padding: "55px",
    backgroundColor: "white",color: "teal"}
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog2 extends React.Component {
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
    const { classes } = this.props;
    return (
      <div style={{ display: "inline-block",
      marginLeft: "15px" }}>
        {/* segundo boton */}

        <h3 style={{color:"white", textShadow: "1px 1px black"}}>Protección de datos</h3>
        <Avatar className={classes.Avatar}>

      <span>
       <img
           className="fisico"
          src= "./img/prote.png"
          width="85px"
          height="85px"
          alt="fisico"
          onClick={this.handleClickOpen}
          />
          </span>
        </Avatar>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar style={{ background: "teal" }}>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
               <CloseIcon style={{background:"white", borderRadius:"25px", color: "teal"}} />
              </IconButton>
              <Typography variant="h6" color="inherit" align="center"  className={classes.flex}>
                Politica de protección de datos
              </Typography>
              <img
          display= "relative"
          className="fisico"
          src= "./img/prote.png"
          width="40px"
          height="40px"
          min-height="2px"
          alt="fisico"
          aling="center"

          />
            </Toolbar>
          </AppBar>
          <PaperSheet />
        </Dialog>
        <hr style={{ border: "100px" }} />
        <hr style={{ border: "100px" }} />
        {/* tercer boton */}
      </div>
    );
  }
}

FullScreenDialog2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog2);
