import axios from "axios";
axios.defaults.withCredentials = true;

export const activeSession = () => {
  // uses jwt in http only cookie to authenticate user
  // passes response fields to state
  const request = axios({
    method: "get",
    url: "http://localhost:64462/api/authenticate",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    type: "ACTIVE_SESSION",
    payload: request,
  };
};

export const changePage = (e) => {
  // change which page component is rendered
  return {
    type: "CHANGE_PAGE",
    payload: e.target.text,
  };
};

export const logout = () => {
  // logs out user by removing queryResult data from state
  // HTTP response deletes jwt in cookie
  const request = axios({
    method: "put",
    url: "http://localhost:64462/api/authenticate/logout",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    type: "LOGOUT",
    payload: request,
  };
};

export const updateGameStatus = (status) => {
  // changes game status in DB to playerGameStatus in state
  const request = axios({
    method: "put",
    url: `http://localhost:64462/api/players/${status}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    type: "UPDATE_GAME_STATUS",
    payload: request,
  };
};

export function changeStatus(e) {
  // changes the playerGameStatus in state to user's selection
  return {
    type: "CHANGE_STATUS",
    payload: e.target.value,
  };
}

export function switchToRequestStatus() {
  // change game status in state to 'unknown' to render RSVP form
  return {
    type: "SWITCH_TO_REQUEST_STATUS",
  };
}
