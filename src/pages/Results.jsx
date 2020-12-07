import React, { Component } from "react";
import { connect } from "react-redux";
import ResultTable from "../components/ResultTable";

class Results extends Component {
  render() {
    const schedule = this.props.home.queryResults;

    // display previous games if user has any
    if (schedule.length) {
      return <ResultTable results={this.props.home.queryResults.results} />;
    } else {
      return "You have no results from previous games.";
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
