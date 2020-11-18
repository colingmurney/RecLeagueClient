import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/loginAction";

class NavBar extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <Link className={"my-0 mr-md-auto font-weight-bold"} to="/leagues">
          Join a RecLeague
        </Link>
        <h4
          style={{ color: "blue" }}
          className="my-0 mr-md-auto font-weight-normal"
        >
          RecLeague
        </h4>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/">
            Something
          </Link>
          <button
            onClick={() => this.props.logout()}
            className="p-2 text-dark"
            to="/login"
          >
            Logout
          </button>
        </nav>
        <Link className="btn btn-outline-primary" to="/home" role="button">
          Home
        </Link>
      </div>
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
