import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import NavigationBar from "../../../components/navbar/General/NavigationBar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { FiFileText, FiUser, FiSettings, FiHelpCircle } from "react-icons/fi";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import * as jwt from "jwt-simple";

const styles = (theme: Theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

const GoToSetting = (props: any) => <Link to="/account/settings" {...props} />;

class Account extends React.Component<RouteComponentProps> {
  state = {
    selectedIndex: 0
  };

  handleListItemClick = (event: any, index: any) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes }: any = this.props;
    const userData = sessionStorage.getItem("SESSION_DATA_JWT");
    const keyGen = sessionStorage.getItem("SESSION_GENERATED_KEY");
    const userCredentials =
      userData && keyGen
        ? jwt.decode(JSON.parse(userData), JSON.parse(keyGen))
        : null;

    return (
      <div
        style={{
          height: "-webkit-fill-available",
          background: "#eff0f5"
        }}
      >
        <div className={classes.root}>
          <NavigationBar pageName="Account" />
          <AppBar
            style={{ boxShadow: "none" }}
            position="static"
            color="default"
          >
            <Toolbar
              style={{
                background: "linear-gradient(90deg,#183545,#1a9cb7",
                minHeight: "50px"
              }}
            >
              <Typography
                variant="h6"
                style={{ fontSize: "13px", color: "#ffffff" }}
                color="inherit"
              >
                {userCredentials
                  ? `Halo, ${userCredentials.name}`
                  : `Halo, Anonymous`}
              </Typography>
            </Toolbar>
          </AppBar>
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <FiUser style={{ fontSize: "23px", color: "#999999" }} />
              </ListItemIcon>
              <ListItemText primary="Informasi Akun" />
            </ListItem>
          </List>
          <Divider style={{ padding: "3px", background: "#eff0f5" }} />
          <List component="nav">
            <ListItem button component={GoToSetting}>
              <ListItemIcon>
                <FiSettings style={{ fontSize: "23px", color: "#999999" }} />
              </ListItemIcon>
              <ListItemText primary="Pengaturan" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <FiFileText style={{ fontSize: "23px", color: "#999999" }} />
              </ListItemIcon>
              <ListItemText primary="Kebijakan" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <FiHelpCircle style={{ fontSize: "23px", color: "#999999" }} />
              </ListItemIcon>
              <ListItemText primary="Bantuan" />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Account));
