import React, { Component } from "react";
import Dropdown from "../components/Dropdown";
import JoinTeamTable from "../components/JoinTeamTable";
import { connect } from "react-redux";
import { selectTeam, updateTeam } from "../actions/joinTeamAction";

class JoinTeam extends Component {
  componentDidMount() {}

  render() {
    const {
      region,
      sport,
      tier,
      team,
      loadedRegions,
      loadedSports,
      loadedTiers,
      loadedTeams,
    } = this.props.joinTeam;

    // display dropdowns to filter teams
    // display available teams in table
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Dropdown type="Region" options={loadedRegions} selected={region} />
          </div>
          <div className="col-2">
            {loadedSports && (
              <Dropdown type="Sport" options={loadedSports} selected={sport} />
            )}
          </div>
          <div className="col-2">
            {loadedTiers && (
              <Dropdown type="Tier" options={loadedTiers} selected={tier} />
            )}
          </div>
        </div>
        <div className="col-4">
          {loadedTeams && (
            <JoinTeamTable
              loadedTeams={loadedTeams}
              selectTeam={this.props.selectTeam}
              selected={team}
              updateTeam={this.props.updateTeam}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    joinTeam: state.joinTeam,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTeam: (team) => {
      dispatch(selectTeam(team));
    },
    updateTeam: (teamname) => {
      dispatch(updateTeam(teamname));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinTeam);
