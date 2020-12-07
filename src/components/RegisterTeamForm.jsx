import React, { Component } from "react";

class RegisterTeamForm extends Component {
  //use current 'team' in state to request new team on submit
  handleSumbit(e) {
    e.preventDefault();
    const { team, region, sport, tier } = this.props.joinTeam;
    this.props.createTeam({
      TeamName: team,
      RegionName: region,
      SportName: sport,
      Tier: parseInt(tier), //tier is a string in store
    });
  }

  render() {
    // input form that in only displayed when Region, Sport and Tier have been selected
    return (
      <form className="form-inline" onSubmit={(e) => this.handleSumbit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control mr-3"
            placeholder="Team Name"
            onChange={(e) => this.props.changeTeam(e)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary form-control">
            Register
          </button>
        </div>
      </form>
    );
  }
}

export default RegisterTeamForm;
