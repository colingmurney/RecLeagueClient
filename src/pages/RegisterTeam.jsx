import React, { Component } from "react";
import Dropdown from "../components/Dropdown";
import RegisterTeamForm from "../components/RegisterTeamForm";
import { connect } from "react-redux";
import {
  selectTeam,
  updateTeam,
  changeTeam,
  createTeam,
} from "../actions/joinTeamAction";

class RegisterTeam extends Component {
  componentDidMount() {}

  render() {
    const {
      region,
      sport,
      tier,
      loadedRegions,
      loadedSports,
      loadedTiers,
      loadedTeams,
    } = this.props.joinTeam;
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
        <div className="row">
          <div className="col-4">
            {loadedTeams && (
              <RegisterTeamForm
                changeTeam={this.props.changeTeam}
                createTeam={this.props.createTeam}
                joinTeam={this.props.joinTeam}
              />
            )}
          </div>
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
    changeTeam: (e) => {
      dispatch(changeTeam(e));
    },
    selectTeam: (team) => {
      dispatch(selectTeam(team));
    },
    updateTeam: (team) => {
      dispatch(updateTeam(team));
    },
    createTeam: (team) => {
      dispatch(createTeam(team));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTeam);
