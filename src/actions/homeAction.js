import axios from "axios";
axios.defaults.withCredentials = true;

export const displayHome = () => {
  const request = axios({
    method: "get",
    // withCredentials: true,
    url: "http://localhost:64462/api/games",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    type: "DISPLAY_HOME",
    payload: request,
  };
};

export const changePage = (e) => {
  return {
    type: "CHANGE_PAGE",
    payload: e.target.text,
  };
};
