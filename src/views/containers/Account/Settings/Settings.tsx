import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NavigationBar from "../../../components/navbar/Account/NavigationBar";
import { FiChevronRight } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { SettingsProps } from "./props";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import * as jwt from "jwt-simple";
import { connect } from "react-redux";
import { logOutAction } from "../../../../store/actions/auth";

const styles = (theme: Theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class Settings extends React.Component<RouteComponentProps & SettingsProps> {
  state = {
    selectedIndex: 0
  };

  handleListItemClick = (event: any, index: any) => {
    this.setState({ selectedIndex: index });
  };

  signOut = async () => {
    await this.props.logOutAction();
    await this.props.history.push("/");
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
      <div style={{ height: "-webkit-fill-available", background: "#eff0f5" }}>
        <div className={classes.root}>
          <NavigationBar pageName="Settings" />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Ubah Kata Sandi" />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <FiChevronRight
                    style={{
                      fontSize: "23px",
                      color: "#ccc"
                    }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button onClick={this.signOut}>
              <ListItemIcon>
                <IoIosLogOut
                  style={{
                    fontSize: "45px",
                    color: "#ccc",
                    transform: "rotate(180deg)"
                  }}
                />
              </ListItemIcon>
              <ListItemText
                style={{ padding: 0 }}
                primary="Keluar"
                secondary={
                  userCredentials ? `${userCredentials.email}` : `Anonymous`
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logOutAction: () => dispatch(logOutAction())
  };
};

export default withRouter(
  withStyles(styles)(
    connect(
      null,
      mapDispatchToProps
    )(Settings)
  )
);
