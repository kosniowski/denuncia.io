import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import SignIn from "./componentes/Login";

//import Navigation from "./componentes/Navigation";

class App extends Component {
  render() {


    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={SignIn} exact />
              <Route path="/inicio" component={Inicio} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
