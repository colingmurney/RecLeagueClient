import React, { Component } from "react";
import { changeStatus, updateGameStatus } from "../actions/homeAction";
import { connect } from "react-redux";

class RequestStatus extends Component {
  async handleStatusUpdate(e) {
    e.preventDefault();
    await this.props.updateGameStatus(this.props.home.playerGameStatus);
  }

  render() {
    return (
      // <div className="container-fluid bg-warning">
      <div className="row pt-2 mb-4">
        <div className="col5 ml-3 mb-3">
          Please let your teammates and oppenents know if you will be able to
          attend the next game.
        </div>
        <form className="col-7" onSubmit={(e) => this.handleStatusUpdate(e)}>
          <label className="checkbox-inline mr-5">
            <input
              className="mr-3"
              type="checkbox"
              name="status"
              value="attending"
              checked={this.props.home.playerGameStatus === "attending"}
              onChange={(e) => this.props.changeStatus(e)}
            />
            I'll be there
          </label>
          <label className="checkbox-inline mr-5">
            <input
              className="mr-3"
              type="checkbox"
              name="status"
              value="absent"
              checked={this.props.home.playerGameStatus === "absent"}
              onChange={(e) => this.props.changeStatus(e)}
            />
            I can't make it
          </label>
          <button className="btn-sm" type="submit">
            Update Game Status
          </button>
        </form>
      </div>
      // </div>
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
    changeStatus: (e) => {
      dispatch(changeStatus(e));
    },
    updateGameStatus: (status) => {
      dispatch(updateGameStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestStatus);
