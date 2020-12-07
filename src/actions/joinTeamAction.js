import axios from "axios";
axios.defaults.withCredentials = true;

export function moveRegionsToJoinTeamReducer(regions) {
  // runs on componentDidMount to transfer reducer regions to joinTeam reducer
  return {
    type: "MOVE_REGION",
    payload: regions,
  };
}

export function changeTeam(e) {
  // changes team in state to user input when creating a team
  return {
    type: "CHANGE_TEAM",
    payload: e.target.value,
  };
}

export function selectRegion(region) {
  // changes region in state to user selection from drop down
  return {
    type: "SELECT_REGION",
    payload: region,
  };
}

export function selectSport(sport) {
  // changes sport in state to user selection from drop down
  return {
    type: "SELECT_SPORT",
    payload: sport,
  };
}

export function selectTier(tier) {
  // changes tier in state to user selection from drop down
  return {
    type: "SELECT_TIER",
    payload: tier,
  };
}

export function selectTeam(team) {
  // changes team in state to user selection from joinTeamTable
  return {
    type: "SELECT_TEAM",
    payload: team,
  };
}

export function loadSports(region) {
  // fetches all available sports for user region selection
  const request = axios({
    method: "get",
    url: "http://localhost:64462/api/jointeam/sports",
    headers: {
      "Content-Type": "application/json",
    },
    params: { region: region },
  });
  return {
    type: "LOAD_SPORTS",
    payload: request,
  };
}

export function loadTiers(region, sport) {
  // fetches all available tiers for user region and sport selection
  const request = axios({
    method: "get",
    url: "http://localhost:64462/api/jointeam/tiers",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      region: region,
      sport: sport,
    },
  });
  return {
    type: "LOAD_TIERS",
    payload: request,
  };
}

export function loadTeams(region, sport, tier) {
  // fetches all available teams for user region, sport and tier selection
  const request = axios({
    method: "get",
    url: "http://localhost:64462/api/jointeam/teams",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      region: region,
      sport: sport,
      tier: tier,
    },
  });
  return {
    type: "LOAD_TEAMS",
    payload: request,
  };
}

export function updateTeam(teamname) {
  // update user's team in DB with the current state 'team' field
  const request = axios({
    method: "put",
    url: "http://localhost:64462/api/jointeam/update",
    headers: {
      "Content-Type": "application/json",
    },
    params: { teamname: teamname },
  });
  return {
    type: "UPDATE_TEAM",
    payload: request,
  };
}

export function createTeam(team) {
  // create new team in DB using current state 'team', 'region', 'sport' and 'tier' fields
  console.log(team);
  const request = axios({
    method: "post",
    url: "http://localhost:64462/api/jointeam/create/",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(team),
  });
  return {
    type: "CREATE_TEAM",
    payload: request,
  };
}
