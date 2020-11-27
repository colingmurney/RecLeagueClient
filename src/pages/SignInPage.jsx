import React, { Component } from "react";

import {
  signIn,
  changeEmail,
  changePassword,
  loginRegisterSwitch,
  rememberMeToggle,
} from "../actions/loginAction";
import { connect } from "react-redux";

class SignInPage extends Component {
  async signInHandler(e) {
    e.preventDefault();
    const { login } = this.props;
    await this.props.signIn({
      Email: login.email.trim(),
      Password: login.password.trim(),
      StaySignedIn: login.staySignedIn,
    });
  }

  render() {
    return (
      <div className="login">
        <h1 className="mt-5 mb-5">RecLeague</h1>
        <form className="form-signin" onSubmit={(e) => this.signInHandler(e)}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <input
            type="email"
            className="form-control mb-1"
            placeholder="Email address"
            onChange={(e) => this.props.changeEmail(e)}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => this.props.changePassword(e)}
            required
          />
          <div className="checkbox mb-2">
            <label>
              <input
                onClick={() => this.props.rememberMeToggle()}
                type="checkbox"
                value="remember-me"
              />{" "}
              Remember me
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block mb-2"
            type="submit"
          >
            Sign in
          </button>
          <button onClick={() => this.props.loginRegisterSwitch()}>
            Make an Account
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (login) => {
      dispatch(signIn(login));
    },
    changeEmail: (e) => {
      dispatch(changeEmail(e));
    },
    changePassword: (e) => {
      dispatch(changePassword(e));
    },
    loginRegisterSwitch: (e) => {
      dispatch(loginRegisterSwitch(e));
    },
    rememberMeToggle: (e) => {
      dispatch(rememberMeToggle(e));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
