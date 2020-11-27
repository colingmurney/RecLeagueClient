import axios from "axios";
axios.defaults.withCredentials = true;

export const activeSession = () => {
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
  return {
    type: "CHANGE_PAGE",
    payload: e.target.text,
  };
};

export const logout = () => {
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
  return {
    type: "CHANGE_STATUS",
    payload: e.target.value,
  };
}

export function switchToRequestStatus() {
  return {
    type: "SWITCH_TO_REQUEST_STATUS",
  };
}
