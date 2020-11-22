import React, { Component } from "react";
import { connect } from "react-redux";

class RsvpForm extends Component {
  render() {
    // const { queryResults } = this.props.login;
    // {queryResults.playerGameStatus.gameStatusName}
    return (
      <div className="container-fluid bg-warning">
        <div className="row pt-2">
          <div className="col-4">
            Some info goes here about the staus of the player
          </div>
          <form className="col-6">
            <label className="checkbox-inline mr-5">
              <input className="mr-3" type="checkbox" value="absent" />I will be
              there
            </label>
            <label className="checkbox-inline mr-5">
              <input className="mr-3" type="checkbox" value="attending" />I
              can't make it
            </label>
            <input type="button" value="Update Game Status" />
          </form>
        </div>
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
    // activeSession: () => {
    //   dispatch(activeSession());
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RsvpForm);
