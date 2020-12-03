import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { activeSession } from "../actions/homeAction";
import RsvpForm from "../components/RsvpForm";
import NextGame from "../components/NextGame";
import SideBar from "../components/SideBar";
import Schedule from "../pages/Schedule";
import Results from "../pages/Results";
import JoinTeam from "../pages/JoinTeam";
import RegisterTeam from "../pages/RegisterTeam";
import Notifications from "../components/Notifications";
import { moveRegionsToJoinTeamReducer } from "../actions/joinTeamAction";
import Profile from "../pages/Profile";
// import CaptainsReport from "../components/CaptainsReport";

class Home extends Component {
  async componentDidMount() {
    await this.props.activeSession();
    if (this.props.home.queryResults != null) {
      this.props.moveRegionsToJoinTeamReducer(
        this.props.home.queryResults.regionNames
      );
    }
  }

  render() {
    const { page, queryResults } = this.props.home;
    if (queryResults == null) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <NavBar />
        <div className="below-nav">
          <SideBar />
          <div className="content">
            {page === "Home" && <RsvpForm />}
            {page === "Home" && <NextGame />}
            {/* {page === "Home" && <CaptainsReport />} */}
            {page === "Schedule" && <Schedule />}
            {page === "Results" && <Results />}
            {page === "Join Team" && <JoinTeam />}
            {page === "Register Team" && <RegisterTeam />}
            {page === "Notifications" && <Notifications />}
            {page === "Profile" && <Profile />}
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
    activeSession: () => {
      dispatch(activeSession());
    },
    moveRegionsToJoinTeamReducer: (regions) => {
      dispatch(moveRegionsToJoinTeamReducer(regions));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
