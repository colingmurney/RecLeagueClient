import React, { Component } from "react";
import { connect } from "react-redux";
import ScheduleTable from "../components/ScheduleTable";

class Schedule extends Component {
  render() {
    const { schedule } = this.props.home.queryResults;

    // display upcoming games if user has any
    if (schedule.length) {
      return <ScheduleTable schedule={schedule} />;
    } else {
      return "You have no scheduled games.";
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
