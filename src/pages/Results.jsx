import React, { Component } from "react";
import { connect } from "react-redux";
import ResultTable from "../components/ResultTable";

class Results extends Component {
  render() {
    return <ResultTable results={this.props.home.queryResults.results} />;
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
