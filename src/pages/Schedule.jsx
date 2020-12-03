import React, { Component } from "react";
import { connect } from "react-redux";
import ScheduleTable from "../components/ScheduleTable";

class Schedule extends Component {
  render() {
    return <ScheduleTable schedule={this.props.home.queryResults.schedule} />;
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
