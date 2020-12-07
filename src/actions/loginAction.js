import axios from "axios";
axios.defaults.withCredentials = true;

export const signIn = (login) => {
  // send email, password, and staySignedIn (bool) in body of request to login
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
  // send name, email, password, password confirmation, and staySignedIn (bool) in body of request to create account
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

export function changeEmail(e) {
  // change state to current value in email input
  return {
    type: "CHANGE_EMAIL",
    payload: e.target.value,
  };
}

export function changePassword(e) {
  // change state to current value in password input
  return {
    type: "CHANGE_PASSWORD",
    payload: e.target.value,
  };
}

export function changeConfirmPassword(e) {
  // change state to current value in password confirmation input
  return {
    type: "CHANGE_CONFIRM_PASSWORD",
    payload: e.target.value,
  };
}

export function changeFirstName(e) {
  // change state to current value in first name input
  return {
    type: "CHANGE_FIRST_NAME",
    payload: e.target.value,
  };
}

export function changeLastName(e) {
  // change state to current value in last name input
  return {
    type: "CHANGE_LAST_NAME",
    payload: e.target.value,
  };
}

export function loginRegisterSwitch() {
  // toggle view from login form to register form.
  return {
    type: "SWITCH_VIEW",
  };
}
export function rememberMeToggle() {
  // toggle states stayLoggedIn field
  return {
    type: "REMEMBER_ME_TOGGLE",
  };
}

export function isSignedInToFalse() {
  // set isSignedIn field to false (use after logout)
  return {
    type: "IS_SIGNED_IN_TO_FALSE",
  };
}
