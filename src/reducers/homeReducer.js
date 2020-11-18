const initialState = {
  unauthorized: false,
  games: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_HOME_FULFILLED":
      state = {
        ...state,
        unauthorized: false,
        games: action.payload.data,
      };
      break;
    case "DISPLAY_HOME_REJECTED":
      state = {
        ...state,
        unauthorized: true,
      };
      break;
    default:
      break;
  }
  return state;
};

export default homeReducer;
