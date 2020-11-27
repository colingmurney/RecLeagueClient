const initialState = {
  region: "Region",
  sport: "Sport",
  tier: "Tier",
  team: false,
  loadedRegions: false,
  loadedSports: false,
  loadedTiers: false,
  loadedTeams: false,
  updateMsg: "",
};

const joinTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_REGION":
      state = {
        ...state,
        loadedRegions: action.payload,
      };
      break;
    case "CHANGE_TEAM":
      state = {
        ...state,
        team: action.payload,
      };
      break;
    case "SELECT_REGION":
      state = {
        ...state,
        region: action.payload,
        sport: "Sport",
        tier: "Tier",
        team: false,
        loadedTiers: false,
        loadedTeams: false,
      };
      break;
    case "SELECT_SPORT":
      state = {
        ...state,
        sport: action.payload,
        tier: "Tier",
        team: false,
        loadedTeams: false,
      };
      break;
    case "SELECT_TIER":
      state = {
        ...state,
        team: false,
        tier: action.payload,
      };
      break;
    case "SELECT_TEAM":
      state = {
        ...state,
        team: action.payload,
      };
      break;
    case "LOAD_SPORTS_FULFILLED":
      state = {
        ...state,
        loadedSports: action.payload.data,
      };
      break;
    case "LOAD_SPORTS_REJECTED":
      state = {
        ...state,
      };
      break;
    case "LOAD_TIERS_FULFILLED":
      state = {
        ...state,
        loadedTiers: action.payload.data,
      };
      break;
    case "LOAD_TIERS_REJECTED":
      state = {
        ...state,
      };
      break;
    case "LOAD_TEAMS_FULFILLED":
      state = {
        ...state,
        loadedTeams: action.payload.data,
      };
      break;
    case "LOAD_TEAMS_REJECTED":
      state = {
        ...state,
      };
      break;
    case "UPDATE_TEAM_FULFILLED":
      state = {
        ...state,
        updateMsg: action.payload,
      };
      break;
    case "UPDATE_TEAM_REJECTED":
      state = {
        ...state,
        updateMsg: "Error joining team",
      };
      break;
    case "CREATE_TEAM_FULFILLED":
      state = {
        ...state,
        updateMsg: action.payload,
      };
      break;
    case "CREATE_TEAM_REJECTED":
      state = {
        ...state,
        updateMsg: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

export default joinTeamReducer;
