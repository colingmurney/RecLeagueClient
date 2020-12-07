import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadSports,
  loadTiers,
  loadTeams,
  selectRegion,
  selectSport,
  selectTier,
} from "../actions/joinTeamAction";

class Dropdown extends Component {
  /*
  Component is used for Region, Sport, and Tier dropdown menus
  */

  // handle the dropdown menu selections
  handleChange(e) {
    const {
      type,
      loadSports,
      selectRegion,
      loadTiers,
      selectSport,
      loadTeams,
      selectTier,
    } = this.props;
    const { region, sport } = this.props.joinTeam;
    const { value } = e.target;

    // type controls which dropdown has been selected and which API to call
    if (type === "Region") {
      loadSports(value);
      selectRegion(value);
    } else if (type === "Sport") {
      loadTiers(region, value);
      selectSport(value);
    } else {
      loadTeams(region, sport, value);
      selectTier(value);
    }
  }

  render() {
    const dropdownList = [];

    // dynamically display the filtered options for the dropdown
    this.props.options.map((item, index) => {
      return dropdownList.push(
        <option key={index} value={item}>
          {item}
        </option>
      );
    });

    return (
      <div>
        <form>
          <div className="form-group">
            <select
              value={this.props.selected}
              className="form-control"
              onChange={(e) => this.handleChange(e)}
            >
              <option disabled value={this.props.type}>
                {/* // 'Region', 'Sport', or 'Tier' */}
                {this.props.type}
              </option>
              {dropdownList}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    joinTeam: state.joinTeam,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSports: (region) => {
      dispatch(loadSports(region));
    },
    selectRegion: (region) => {
      dispatch(selectRegion(region));
    },
    loadTiers: (region, sport) => {
      dispatch(loadTiers(region, sport));
    },
    selectSport: (sport) => {
      dispatch(selectSport(sport));
    },
    loadTeams: (region, sport, tier) => {
      dispatch(loadTeams(region, sport, tier));
    },
    selectTier: (tier) => {
      dispatch(selectTier(tier));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
