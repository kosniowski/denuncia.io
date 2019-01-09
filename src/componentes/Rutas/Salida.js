import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navigation = () => {
  return (
    <div>
      <Button classes="props" color="inherit" variant="extendedFab">
        <NavLink style={{ color: "teal", textDecoration: "none" }} to="/">
          {" "}
          Inicio{" "}
        </NavLink>{" "}
      </Button>
    </div>
  );
};
export default Navigation;
