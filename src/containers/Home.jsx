import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { displayHome } from "../actions/homeAction";
import NavBar from "../components/NavBar";
import { activeSession } from "../actions/loginAction";
import RsvpForm from "../components/RsvpForm";
import NextGame from "../components/NextGame";

class Home extends Component {
  async componentDidMount() {
    await this.props.activeSession();
  }

  render() {
    if (!this.props.login.isSignedIn) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <NavBar />
          <RsvpForm />
          <br />
          <NextGame />
        </div>
      );
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
    displayHome: () => {
      dispatch(displayHome());
    },
    activeSession: () => {
      dispatch(activeSession());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
