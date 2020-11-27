import React, { Component } from "react";
import { connect } from "react-redux";

class PlayerStatusesTable extends Component {
  render() {
    const players = [];
    this.props.playerStatuses.map((player) => {
      return players.push(
        <tr key={player.PlayerId}>
          <td>{player.firstName}</td>
          <td>{player.gameStatusName}</td>
        </tr>
      );
    });

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Game Status</th>
          </tr>
        </thead>
        <tbody>{players}</tbody>
      </table>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerStatusesTable);
