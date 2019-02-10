import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import NavigationBar from "../../components/navbar/General/NavigationBar";
import {
  FiFileText,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiLogOut
} from "react-icons/fi";

const styles = (theme: Theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class Mail extends React.Component {
  state = {
    selectedIndex: 0
  };

  handleListItemClick = (event: any, index: any) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes }: any = this.props;

    return (
      <div style={{ height: "-webkit-fill-available", background: "#eff0f5" }}>
        <div className={classes.root}>
          <NavigationBar pageName="Mail" />
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <FiUser style={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText primary="Informasi Akun" />
            </ListItem>
          </List>
          <Divider style={{ padding: "3px", background: "#eff0f5" }} />
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <FiSettings style={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText primary="Pengaturan" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <FiFileText style={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText primary="Kebijakan" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <FiHelpCircle style={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText primary="Bantuan" />
            </ListItem>
          </List>
          <Divider style={{ padding: "3px", background: "#eff0f5" }} />

          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <FiLogOut style={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText primary="Keluar" />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Mail);
