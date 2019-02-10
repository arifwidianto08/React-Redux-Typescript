import React, { useEffect } from "react";
import Routes from "./routes/route";
import Loginpage from "./containers/Loginpage/Loginpage";
import { connect } from "react-redux";
import { localAuthListener } from "../store/actions/auth";

interface MainProps {
  authorized: any;
  localAuthListener: any;
}
const Main = (props: MainProps) => {
  // Trigger Auth Listener to Detect Sign In Activity
  useEffect(() => {
    props.localAuthListener();
  });

  const { authorized } = props;
  return authorized ? <Routes /> : <Loginpage />;
};

const mapStateToProps = (state: any) => {
  return {
    authorized: state.auth.authorized
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    localAuthListener: () => dispatch(localAuthListener())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
