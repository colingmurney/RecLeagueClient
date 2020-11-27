import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import login from "./reducers/loginReducer";
import home from "./reducers/homeReducer";
import joinTeam from "./reducers/joinTeamReducer";

export default createStore(
  combineReducers({
    login,
    home,
    joinTeam,
  }),
  {},
  applyMiddleware(logger, thunk, promise)
);
