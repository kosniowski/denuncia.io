import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 4
  },

});

const Navigation = () => {
  return (
    <div style={{display:"inline-block"}}>

          <Button className="submit"
            type="submit"
            fullWidth
            variant="extendedFab"


            style={{ background: "teal" }}
          >
             <NavLink style={{ color: "white", textDecoration: "none" }} to="/inicio">
        {" "}
        Continuar{" "}
      </NavLink>{" "}
      </Button>
    </div>
  );
};
export default withStyles(styles)(Navigation);
