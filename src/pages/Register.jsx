import React, { Component } from "react";
import {
  changeEmail,
  changePassword,
  changeConfirmPassword,
  changeFirstName,
  changeLastName,
  loginRegisterSwitch,
  rememberMeToggle,
  createAccount,
} from "../actions/loginAction";
import { connect } from "react-redux";

class Register extends Component {
  async registerHandler(e) {
    e.preventDefault();
    const { login } = this.props;
    if (login.password !== login.confirmPassword)
      return alert("Passwords must match");
    await this.props.createAccount({
      FirstName: login.firstName,
      LastName: login.lastName,
      Email: login.email,
      Password: login.password,
      ConfirmPassword: login.confirmPassword,
      StaySignedIn: login.staySignedIn,
    });
  }

  render() {
    return (
      <div className="login">
        <h1 className="mt-5 mb-5">RecLeague</h1>
        <form className="form-signin" onSubmit={(e) => this.registerHandler(e)}>
          <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
          <input
            type="text"
            className="form-control mb-1"
            placeholder="First Name"
            required
            onChange={(e) => this.props.changeFirstName(e)}
          />
          <input
            type="text"
            className="form-control mb-1"
            placeholder="Last Name"
            required
            onChange={(e) => this.props.changeLastName(e)}
          />
          <input
            type="email"
            className="form-control mb-1"
            placeholder="Email address"
            required
            onChange={(e) => this.props.changeEmail(e)}
          />
          <input
            type="password"
            className="form-control mb-1"
            placeholder="Create password"
            required
            onChange={(e) => this.props.changePassword(e)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm password"
            required
            onChange={(e) => this.props.changeConfirmPassword(e)}
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
            Become a member
          </button>
          <button onClick={() => this.props.loginRegisterSwitch()}>
            Already joined? Sign In
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
    createAccount: (e) => {
      dispatch(createAccount(e));
    },
    changeEmail: (e) => {
      dispatch(changeEmail(e));
    },
    changePassword: (e) => {
      dispatch(changePassword(e));
    },
    changeConfirmPassword: (e) => {
      dispatch(changeConfirmPassword(e));
    },
    changeFirstName: (e) => {
      dispatch(changeFirstName(e));
    },
    changeLastName: (e) => {
      dispatch(changeLastName(e));
    },
    loginRegisterSwitch: (e) => {
      dispatch(loginRegisterSwitch(e));
    },
    rememberMeToggle: (e) => {
      dispatch(rememberMeToggle(e));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
