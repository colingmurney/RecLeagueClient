import React, { Component } from "react";
import PlayerStatusesTable from "./PlayerStatusesTable";
import { connect } from "react-redux";

class NextGame extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <h4>Away Team</h4>
            <PlayerStatusesTable
              playerStatuses={
                this.props.home.queryResults.awayTeamPlayerStatuses
              }
            />
          </div>
          <div className="col-4 ml-5">
            <h4>Home Team</h4>
            <PlayerStatusesTable
              playerStatuses={
                this.props.home.queryResults.homeTeamPlayerStatuses
              }
            />
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
    // changeStatus: (e) => {
    //   dispatch(changeStatus(e));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextGame);
