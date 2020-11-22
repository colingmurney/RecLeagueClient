import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/loginAction";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top bg-white border-bottom shadow-sm">
        <Link className={"my-0 mr-md-auto font-weight-bold"} to="/leagues">
          Join a Team
        </Link>
        <h4
          style={{ color: "blue" }}
          className="my-0 mr-md-auto font-weight-normal"
        >
          RecLeague
        </h4>
        <nav className="my-2 my-md-0 mr-md-3">
          <button
            onClick={() => this.props.logout()}
            className="p-2 text-dark"
            to="/login"
          >
            Logout
          </button>
        </nav>
        <Link className="btn btn-outline-primary" to="/" role="button">
          Home
        </Link>
      </nav>
    );
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
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
