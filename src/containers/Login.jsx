import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { activeSession } from "../actions/homeAction";
import { isSignedInToFalse } from "../actions/loginAction";
import { connect } from "react-redux";
import Register from "../pages/Register";
import SignInPage from "../pages/SignInPage";

class Login extends Component {
  componentDidMount() {
    this.props.activeSession();
    this.props.isSignedInToFalse();
  }

  componentDidUpdate() {
    if (this.props.login.isSignedIn) this.props.activeSession();
  }

  render() {
    if (this.props.home.queryResults != null) return <Redirect to="/" />;
    if (this.props.login.register) {
      return <Register />;
    } else {
      return <SignInPage />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activeSession: () => {
      dispatch(activeSession());
    },
    isSignedInToFalse: () => {
      dispatch(isSignedInToFalse());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
