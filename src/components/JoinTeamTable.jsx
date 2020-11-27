import React, { Component } from "react";

class JoinTeamTable extends Component {
  handleClick(e) {
    console.log(e.target.innerText);
    this.props.selectTeam(e.target.innerText);
  }

  handleUpdate() {
    this.props.updateTeam(this.props.selected);
  }

  render() {
    const { selected } = this.props;

    const teams = [];
    this.props.loadedTeams.map((team) => {
      return teams.push(
        <tr
          key={team}
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
