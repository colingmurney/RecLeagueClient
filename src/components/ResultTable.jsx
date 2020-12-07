import React, { Component } from "react";

class ResultTable extends Component {
  render() {
    const { results } = this.props;

    // dynamically create table rows and data for users previous games
    const games = [];
    results.map((game, index) => {
      return games.push(
        <tr key={index}>
          <td>{game.date}</td>
          <td>{game.home}</td>
          <td>{game.homeScore}</td>
          <td>{game.away}</td>
          <td>{game.awayScore}</td>
        </tr>
      );
    });

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th>Home Team</th>
              <th>Home Score</th>
              <th>Away Team</th>
              <th>Away Score</th>
            </tr>
          </thead>
          <tbody>{games}</tbody>
        </table>
      </div>
    );
  }
}

export default ResultTable;
