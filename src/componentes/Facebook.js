import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: ""
  };

  responseFacebook = response => {
    //console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  //componentCliked = () => console.log("click del raton");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            borderRadius:"25px",
            display: "flex" }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h6>
            .. Bienvenido :
            {this.state.name}
          </h6>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          variant= "extendedFab"
          appId="437353970125969"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          textButton="Ingresa con Facebook"
        />
      );
    }
    return (
      <div

      >
        {fbContent}
      </div>
    );
  }
}
