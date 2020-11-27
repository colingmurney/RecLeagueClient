import React, { Component } from "react";
import { connect } from "react-redux";
import { switchToRequestStatus } from "../actions/homeAction";
import RequestStatus from "./RequestStatus";
import StatusConfirmed from "./StatusConfirmed";

class RsvpForm extends Component {
  render() {
    const { gameStatusName } = this.props.home.queryResults.playerGameStatus;

    return (
      <div
        className={`container-fluid ${
          gameStatusName === "unknown"
            ? "bg-warning text-white"
            : "bg-success text-white"
        }`}
      >
        {gameStatusName === "unknown" ? (
          <RequestStatus />
        ) : (
          <StatusConfirmed
            switchToRequestStatus={this.props.switchToRequestStatus}
          />
        )}
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
    switchToRequestStatus: () => {
      dispatch(switchToRequestStatus());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RsvpForm);
