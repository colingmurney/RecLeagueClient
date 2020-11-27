import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    const { results } = this.props.home.queryResults;
    const games = [];
    results.map((game) => {
      return games.push(
        <tr>
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

export default connect(mapStateToProps, mapDispatchToProps)(Results);
