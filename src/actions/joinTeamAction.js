import axios from "axios";
axios.defaults.withCredentials = true;

export function moveRegionsToJoinTeamReducer(regions) {
  return {
    type: "MOVE_REGION",
    payload: regions,
  };
}

export function changeTeam(e) {
  return {
    type: "CHANGE_TEAM",
    payload: e.target.value,
  };
}

export function selectRegion(region) {
  return {
    type: "SELECT_REGION",
    payload: region,
  };
}

export function selectSport(sport) {
  return {
    type: "SELECT_SPORT",
    payload: sport,
  };
}

export function selectTier(tier) {
  return {
    type: "SELECT_TIER",
    payload: tier,
  };
}

export function selectTeam(team) {
  return {
    type: "SELECT_TEAM",
    payload: team,
  };
}

export function loadSports(region) {
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
