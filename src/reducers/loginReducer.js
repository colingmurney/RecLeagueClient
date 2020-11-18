const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  staySignedIn: false,
  isSignedIn: false,
  incorrectCredentials: false,
  register: false,
  passwordsDontMatch: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_FULFILLED":
      state = {
        ...state,
        isSignedIn: true,
        incorrectCredentials: false,
      };
      break;
    case "SIGN_IN_REJECTED":
      state = {
        ...state,
        incorrectCredentials: true,
        isSignedIn: false,
      };
      break;
    case "CREATE_ACCOUNT_FULFILLED":
      state = {
        ...state,
        isSignedIn: true,
        incorrectCredentials: false,
      };
      break;
    case "CREATE_ACCOUNT_REJECTED":
      state = {
        ...state,
        incorrectCredentials: true,
        isSignedIn: false,
        // password: "",
        // confirmPassword: "",
      };
      break;
    case "LOGOUT_FULFILLED":
      state = {
        ...state,
        isSignedIn: false,
        staySignedIn: false,
      };
      break;
    case "LOGOUT_REJECTED":
      state = {
        ...state,
        isSignedIn: false,
        staySignedIn: false,
      };
      break;
    case "ACTIVE_SESSION_FULFILLED":
      state = {
        ...state,
        isSignedIn: true,
      };
      break;
    case "ACTIVE_SESSION_REJECTED":
      state = {
        ...state,
        isSignedIn: false,
      };
      break;
    case "CHANGE_EMAIL":
      state = {
        ...state,
        email: action.payload,
      };
      break;
    case "CHANGE_PASSWORD":
      state = {
        ...state,
        password: action.payload,
      };
      break;
    case "CHANGE_CONFIRM_PASSWORD":
      state = {
        ...state,
        confirmPassword: action.payload,
      };
      break;
    case "CHANGE_FIRST_NAME":
      state = {
        ...state,
        firstName: action.payload,
      };
      break;
    case "CHANGE_LAST_NAME":
      state = {
        ...state,
        lastName: action.payload,
      };
      break;
    case "SWITCH_VIEW":
      state = {
        ...state,
        register: !state.register,
        email: "",
        password: "",
        confirmPassword: "",
        staySignedIn: false,
      };
      break;
    case "REMEMBER_ME_TOGGLE":
      state = {
        ...state,
        staySignedIn: !state.staySignedIn,
      };
      break;
    default:
      break;
  }
  return state;
};

export default loginReducer;
