import axios from "axios";

export const signIn = (login) => {
  const request = axios({
    method: "post",
    url: "http://localhost:64462/api/authenticate/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(login),
  });

  return {
    type: "SIGN_IN",
    payload: request,
  };
};

export const createAccount = (player) => {
  const request = axios({
    method: "post",
    url: "http://localhost:64462/api/authenticate/create",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(player),
  });

  return {
    type: "CREATE_ACCOUNT",
    payload: request,
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

export function changeEmail(e) {
  return {
    type: "CHANGE_EMAIL",
    payload: e.target.value,
  };
}

export function changePassword(e) {
  return {
    type: "CHANGE_PASSWORD",
    payload: e.target.value,
  };
}

export function changeConfirmPassword(e) {
  return {
    type: "CHANGE_CONFIRM_PASSWORD",
    payload: e.target.value,
  };
}

export function changeFirstName(e) {
  return {
    type: "CHANGE_FIRST_NAME",
    payload: e.target.value,
  };
}

export function changeLastName(e) {
  return {
    type: "CHANGE_LAST_NAME",
    payload: e.target.value,
  };
}

export function loginRegisterSwitch() {
  return {
    type: "SWITCH_VIEW",
  };
}
export function rememberMeToggle() {
  return {
    type: "REMEMBER_ME_TOGGLE",
  };
}
