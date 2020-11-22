import React, { Component } from "react";
import { changePage } from "../actions/homeAction";
import { connect } from "react-redux";

class SideBar extends Component {
  state = {
    col1: "Home",
    col2: "Schedule",
    col3: "Results",
    col4: "Notifications",
    col5: "Register New Team",
    col6: "Incident Report",
    col7: "New League Requests",
  };
  render() {
    const { page } = this.props.home;
    const pages = [];
    for (var x in this.state) {
      pages.push(
        <a
          className={this.state[x] === page ? "active" : ""}
          href="#home"
          onClick={(e) => this.props.changePage(e)}
        >
          {this.state[x]}
        </a>
      );
    }
    return <div className="sidebar">{pages}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (e) => {
      dispatch(changePage(e));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
