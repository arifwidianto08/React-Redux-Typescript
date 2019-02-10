import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  IoIosHome,
  IoMdPerson,
  IoIosHourglass,
  IoIosMail
} from "react-icons/io";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const styles = {
  root: {
    width: "100%"
  }
};

const themeMui: Theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#00c43e"
        },
        "&$active": {
          color: "#00c43e"
        },
        fontSize: "28px"
      }
    },
    MuiBottomNavigation: {},
    MuiBottomNavigationAction: {
      root: {
        "&$selected": {
          color: "royalblue"
        },
        // "&$active": {
        //   color: "royalblue"
        // },
        fontSize: "28px"
      }
    }
  }
});

class BottomNavbar extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <MuiThemeProvider theme={themeMui}>
        <BottomNavigation
          value={value}
          showLabels
          onChange={this.handleChange}
          style={{ bottom: 0, position: "fixed", width: "100%" }}
        >
          <BottomNavigationAction
            label="Home"
            component={(props: any) => <Link {...props} to="/" />}
            icon={<IoIosHome style={{ fontSize: "23px" }} />}
          />
          <BottomNavigationAction
            label="Mail"
            component={(props: any) => <Link {...props} to="/mail" />}
            icon={<IoIosMail style={{ fontSize: "23px" }} />}
          />
          <BottomNavigationAction
            label="History"
            component={(props: any) => <Link {...props} to="/history" />}
            icon={<IoIosHourglass style={{ fontSize: "23px" }} />}
          />
          <BottomNavigationAction
            label="Account"
            component={(props: any) => <Link {...props} to="/account" />}
            icon={<IoMdPerson style={{ fontSize: "23px" }} />}
          />
        </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(BottomNavbar);
