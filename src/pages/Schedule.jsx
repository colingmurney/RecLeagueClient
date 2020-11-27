import React, { Component } from "react";
import { connect } from "react-redux";

class Schedule extends Component {
  render() {
    const { schedule } = this.props.home.queryResults;
    const games = [];
    schedule.map((game, index) => {
      return games.push(
        <tr key={index}>
          <td>{game.date}</td>
          <td>{game.home}</td>
          <td>{game.away}</td>
          <td>{game.venueName}</td>
          <td>{game.address}</td>
        </tr>
      );
    });

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th scope="col">Home</th>
              <th scope="col">Away</th>
              <th>Location</th>
              <th>Address</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
