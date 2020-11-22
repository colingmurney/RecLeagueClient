import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { displayHome } from "../actions/homeAction";
import NavBar from "../components/NavBar";
import { activeSession } from "../actions/loginAction";
import RsvpForm from "../components/RsvpForm";
import NextGame from "../components/NextGame";
import SideBar from "../components/SideBar";
import Schedule from "../components/Schedule";
import Results from "../components/Results";
import Notifications from "../components/Notifications";
import CaptainsReport from "../components/CaptainsReport";

class Home extends Component {
  async componentDidMount() {
    await this.props.activeSession();
  }

  render() {
    if (!this.props.login.isSignedIn) {
      return <Redirect to="/login" />;
    }

    const { page } = this.props.home;
    const { queryResults } = this.props.login;
    return (
      <div>
        <NavBar />
        <div className="below-nav">
          <SideBar />
          <div className="content">
            {/* {page === "Home" &&
              queryResults != null &&
              queryResults.pendingCaptainReports != null && <CaptainsReport />} */}
            {page === "Home" && queryResults != null && <RsvpForm />}
            {/* {page === "Home" && <NextGame />} */}
            {page === "Schedule" && <Schedule />}
            {page === "Results" && <Results />}
            {page === "Notifications" && <Notifications />}
          </div>
        </div>
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
    // displayHome: () => {
    //   dispatch(displayHome());
    // },
    activeSession: () => {
      dispatch(activeSession());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
