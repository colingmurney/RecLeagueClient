import React, { Component } from "react";
import { connect } from "react-redux";

class CaptainsReport extends Component {
  render() {
    // const { queryResults } = this.props.login;

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
