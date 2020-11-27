const initialState = {
  queryResults: null,
  page: "Home",
  playerGameStatus: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTIVE_SESSION_FULFILLED":
      state = {
        ...state,
        queryResults: action.payload.data,
        playerGameStatus: action.payload.data.playerGameStatus.gameStatusName,
      };
      break;
    case "ACTIVE_SESSION_REJECTED":
      state = {
        ...state,
        queryResults: null,
      };
      break;
    case "CHANGE_PAGE":
      state = {
        ...state,
        page: action.payload,
      };
      break;
    case "LOGOUT_FULFILLED":
      state = {
        ...state,
        queryResults: null,
      };
      break;
    case "LOGOUT_REJECTED":
      state = {
        ...state,
      };
      break;
    case "CHANGE_STATUS":
      state = {
        ...state,
        playerGameStatus: action.payload,
      };
      break;
    case "UPDATE_GAME_STATUS_FULFILLED":
      state = {
        ...state,
        queryResults: null,
      };
      break;
    case "UPDATE_GAME_STATUS_REJECTED":
      state = {
        ...state,
        playerGameStatus: "",
      };
      break;
    case "SWITCH_TO_REQUEST_STATUS":
      state = {
        ...state,
        queryResults: {
          ...state.queryResults,
          playerGameStatus: { gameStatusName: "unknown" },
        },
      };
      break;
    default:
      break;
  }
  return state;
};

export default homeReducer;
