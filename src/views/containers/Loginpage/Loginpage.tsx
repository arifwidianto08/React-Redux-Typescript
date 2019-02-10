import React, { Component } from "react";
import { LoginpageState, LoginpageProps } from "./props";
import "../../../assets/style/loginpage.css";
import Silolas from "../../../assets/image/silolas.png";
import { signInAction } from "../../../store/actions/auth";
import { connect } from "react-redux";

class Loginpage extends Component<LoginpageProps, LoginpageState> {
  state: LoginpageState = {
    email: "",
    password: "",
    isEmptyEmail: undefined,
    isEmptyPassword: undefined,
    isValid: false
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    const { email, password } = this.state;
    this.setState({ [name]: value } as Pick<
      LoginpageState,
      keyof LoginpageState
    >);
    if (!email) {
      this.setState({ isEmptyEmail: "Required" });
    }
    if (!password) {
      this.setState({
        password: "Required"
      });
    }
  };

  handleSubmit = (e: any) => {
    const { email, password } = this.state;
    const credentials = {
      email,
      password
    };
    e.preventDefault();
    this.props.signInAction(credentials);
  };

  render() {
    const { isErrors } = this.props;
    const { email, password } = this.state;
    return (
      <div className="main">
        <div style={cssInJs.loading}>
          <div className="container">
            <form
              style={cssInJs.formSignin}
              className="form-signin"
              onSubmit={this.handleSubmit}
            >
              <div style={{ textAlign: "center" }}>
                <img src={Silolas} alt="Logo" height="250px" width="250px" />
              </div>
              <label className="sr-only">Email address</label>
              <input
                type="text"
                onChange={this.handleChange}
                id="inputEmail"
                name="email"
                value={email}
                className="form-control"
                style={cssInJs.inputStyle}
                placeholder="Email address"
                required={true}
                autoFocus
              />
              <label className="sr-only">Password</label>

              <input
                onChange={this.handleChange}
                name="password"
                value={password}
                type="password"
                id="inputPassword"
                className="form-control"
                style={cssInJs.inputPassword}
                placeholder="Password"
                required
              />

              <button
                style={cssInJs.button}
                className="btn btn-md btn-primary btn-block"
                type="submit"
              >
                Sign in
              </button>
              <br />
              {isErrors ? (
                <p style={{ color: "red", textAlign: "center" }}>{isErrors}</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const cssInJs: {
  loading: object;
  backgroundLoading: object;
  formSignin: object;
  inputStyle: object;
  inputPassword: object;
  headings: object;
  button: object;
} = {
  loading: {
    left: "50%",
    top: "50%",
    textAlign: "center",
    width: "100%",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  },
  backgroundLoading: {
    height: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    backgroundColor: "#f5f5f5"
  },
  formSignin: {
    width: "100%",
    maxWidth: "330px",
    padding: "5px",
    margin: "auto"
  },
  inputStyle: {
    padding: "10px",
    height: "100%",
    borderRadius: 3,
    marginBottom: "20px"
  },
  inputPassword: {
    marginBottom: "27px",
    padding: "10px",
    height: "100%",
    borderRadius: 3
  },
  headings: {
    padding: "25px"
  },
  button: {
    borderRadius: 3,
    height: 44,
    backgroundColor: "#FF4747",
    border: "none"
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signInAction: (creds: any) => dispatch(signInAction(creds))
  };
};

const mapStateToProps = (state: any) => {
  return {
    isErrors: state.auth.isErrors
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loginpage);
