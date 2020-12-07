import React, { Component } from "react";
import { connect } from "react-redux";

class CaptainsReport extends Component {
  render() {
    /*
    Create a component where the captain reports the previous game score
    Include other components such as confirming the other teams attendance
    */

    return <div>The captains report form</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(CaptainsReport);
