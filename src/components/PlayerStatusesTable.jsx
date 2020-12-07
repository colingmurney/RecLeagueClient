import React, { Component } from "react";
import { connect } from "react-redux";

class PlayerStatusesTable extends Component {
  render() {
    // dynamically create table rows and data for each object in playerStatuses array
    const players = [];
    this.props.playerStatuses.map((player, index) => {
      return players.push(
        <tr key={index}>
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
