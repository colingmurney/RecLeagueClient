import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { activeSession } from "../actions/loginAction";
import { connect } from "react-redux";
import Register from "../components/Register";
import SignInPage from "../components/SignInPage";

class Login extends Component {
  componentDidMount() {
    this.props.activeSession();
  }

  render() {
    if (this.props.login.isSignedIn) return <Redirect to="/home" />;
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activeSession: () => {
      dispatch(activeSession());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
