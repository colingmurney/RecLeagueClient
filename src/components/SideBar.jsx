import React, { Component } from "react";
import { changePage } from "../actions/homeAction";
import { connect } from "react-redux";

class SideBar extends Component {
  // NavBar pages will be displayed in this order
  // Page names must match condition in Home container for conditional rendering
  state = {
    col1: "Home",
    col2: "Schedule",
    col3: "Results",
    col4: "Join Team",
    col5: "Register Team",
    col7: "Notifications",
    col8: "Profile",
  };
  render() {
    const { page } = this.props.home;
    const pages = [];

    // dynamicallly render links using all pages in state
    for (var x in this.state) {
      pages.push(
        <a
          className={this.state[x] === page ? "active" : ""}
          href={`#${this.state[x]}`}
          onClick={(e) => this.props.changePage(e)}
          key={x}
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
