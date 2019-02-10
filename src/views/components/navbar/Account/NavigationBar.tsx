import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { NavbarProps } from "./props";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 0
  }
};

class MenuAppBar extends React.Component<NavbarProps & RouteComponentProps> {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = (event: any) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes }: any = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ boxShadow: "none", background: "#ffffff" }}
        >
          <Toolbar style={{ padding: 0, boxShadow: "none" }}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.props.history.push("/account")}
            >
              <ArrowBack style={{ color: "#000000" }} />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              style={{ color: "#000000", fontSize: "16px" }}
              className={classes.grow}
            >
              {this.props.pageName}
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MoreIcon style={{ color: "#000000" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  style={{
                    boxShadow: "1px 1px 8px -1px rgba(0,0,0,0.75)"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem
                    onClick={this.handleClose}
                    component={(props: any) => (
                      <Link
                        style={{ textDecoration: "none" }}
                        {...props}
                        to="/account"
                      />
                    )}
                  >
                    My account
                  </MenuItem>
                  <MenuItem
                    component={(props: any) => <Link {...props} to="/" />}
                    onClick={this.handleClose}
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleClose}
                    component={(props: any) => <Link {...props} to="/mail" />}
                  >
                    Mail
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleClose}
                    component={(props: any) => (
                      <Link {...props} to="/history" />
                    )}
                  >
                    History
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(MenuAppBar));
