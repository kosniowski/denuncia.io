import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "react-md";




const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 1
  },

});

firebase.initializeApp({

  apiKey: "AIzaSyD29GA_7poTKj9A2A3YvDFTQaj2tETZzak",
  authDomain: "denuncia-formularios.firebaseapp.com"
})





class Autenticacion extends Component {


  state = { isSignedIn: false }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false

    }
  }

componentWillUpdate=()=>{
  firebase.auth().languageCode="ES"
}

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user);


    })
  }

  render() {
    return (

      <div >

        {this.state.isSignedIn ?
        (

          <span>
            <h3 style={{color:"teal"}}>Bienvenido:  {firebase.auth().currentUser.displayName}</h3>
            <img style={{width: "40%", height: "40%", borderRadius: "50%", border: "5px solid teal "}}
              alt= ""
              src={firebase.auth().currentUser.photoURL}
            />
        <Divider color= "#F1543F"/>
          <Typography component="h7" variant="h7" style={{color: "teal", fontWeight: "bold"}}>
           Y Por favor presiona:
          </Typography>
          <hr style={{border:"none"}} />
            <Button
              type="submit"
              fullWidth
              variant="extendedFab"
              style={{ background: "#F1543F", color: " white" }}
              onClick={() => firebase.auth().signOut()}>Salir</Button>
              <hr style={{border:"none"}} />
          </span>


        ) : (


          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />


        )}

        </div>

    )
  }
}

export default withStyles(styles)(Autenticacion);