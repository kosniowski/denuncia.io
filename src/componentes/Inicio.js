import React, { Component } from "react";
import ButtonAppBar from "./barra";
import FullScreenDialog from "./Botones/Boton1";
import FullScreenDialog1 from "./Botones/Boton2";
import FullScreenDialog2 from "./Botones/Boton3";
import FullScreenDialog3 from "./Botones/Boton4";
import { Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";



export default class Inicio extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Paper  elevation={24} square={true}  style={{backgroundColor:"white", borderRadius:"25px", margin:"5px", color:"teal"}}>
        <h3 >
          Bienvenido, A continuación encontrará las opciones del aplicativo.
        </h3>
        </Paper>
        <FullScreenDialog />
        <Divider></Divider>
        <FullScreenDialog1 />
        <Divider></Divider>
        <FullScreenDialog2 />
        <Divider></Divider>
        <FullScreenDialog3 />
        <div>
                <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={300}
                Color="white"
                style={{
                   backgroundColor: "white",  border:"teal", arrowColor: "teal" }}
                />
       </div>
      </div>
    );
  }
}
