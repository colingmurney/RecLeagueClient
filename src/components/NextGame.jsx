import React, { Component } from "react";
import PlayerStatusesTable from "./PlayerStatusesTable";
import ScheduleTable from "./ScheduleTable";
import { connect } from "react-redux";

class NextGame extends Component {
  render() {
    const schedule = this.props.home.queryResults;
    // create copy of scheduled games array with only the first item (next game)
    const firstGame = [this.props.home.queryResults.schedule[0]];

    return (
      <div>
        {/* Details of the next game only */}
        {schedule.length && <ScheduleTable schedule={firstGame} />}

        {/* Player game statuses for each team in user's upcoming games */}
        <div className="container-fluid mt-5">
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NextGame);
