import React, { Component } from "react";

class JoinTeamTable extends Component {
  // update state with the team clicked on
  handleClick(e) {
    console.log(e.target.innerText);
    this.props.selectTeam(e.target.innerText);
  }

  // update user's team in DB using current 'team' state
  handleUpdate() {
    this.props.updateTeam(this.props.selected);
  }

  render() {
    const { selected } = this.props;

    // dynamically create table rows and data using 'loadedTeams' from state
    const teams = [];
    this.props.loadedTeams.map((team, index) => {
      return teams.push(
        <tr
          key={index}
          onClick={(e) => this.handleClick(e)}
          className={team === selected ? "table-primary" : ""}
        >
          <td>{team}</td>
        </tr>
      );
    });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Team Name</th>
            </tr>
          </thead>
          <tbody>{teams}</tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary ml-3"
          onClick={(e) => this.handleUpdate(e)}
          disabled={!selected}
        >
          Join Selected Team
        </button>
      </div>
    );
  }
}

export default JoinTeamTable;
