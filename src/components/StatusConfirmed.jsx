import React, { Component } from "react";

class StatusConfirmed extends Component {
  state = {};
  render() {
    // display user message that status is confirmed
    // option to change status
    return (
      <div className="row pt-2 mb-4">
        <span className="col-5">
          You have already confirmed your attendance/absense
        </span>
        <button
          className="btn-sm ml-3 mb-2"
          onClick={() => this.props.switchToRequestStatus()}
        >
          Need to change status?
        </button>
      </div>
    );
  }
}

export default StatusConfirmed;
