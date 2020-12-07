import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { activeSession } from "../actions/homeAction";
import { isSignedInToFalse } from "../actions/loginAction";
import { connect } from "react-redux";
import Register from "../pages/Register";
import SignInPage from "../pages/SignInPage";

class Login extends Component {
  componentDidMount() {
    // resets state with player data from if user routes to login page while signed in
    // will redirect to home page on once component re-renders
    this.props.activeSession();

    // set the login reducer's isSignedIn to false when page is not redirected
    this.props.isSignedInToFalse();
  }

  componentDidUpdate() {
    // on successful or account creation, isSignedIn is updated to true
    // jwt in cookie is used to authenticate user and load player data
    if (this.props.login.isSignedIn) this.props.activeSession();
  }

  render() {
    // if user is authenticated and player data is in state, redirect to home page
    if (this.props.home.queryResults != null) return <Redirect to="/" />;

    // conditonally render either SignIn or Register page
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
