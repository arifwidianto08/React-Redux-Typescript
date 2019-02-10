import React, { Component } from "react";
import { Fab, Theme, withStyles } from "@material-ui/core";
import "../../../assets/style/homepage.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { HomepageProps } from "./props";
const styles = (theme: Theme) => ({
  fab: {
    margin: theme.spacing.unit,
    borderRadius: 3
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});
class Homepage extends Component<HomepageProps & RouteComponentProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <Fab
          variant="extended"
          component={(props: any) => <Link {...props} to="/mail" />}
          aria-label="Delete"
          className={classes.fab}
        >
          Extended
        </Fab>
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(Homepage));
