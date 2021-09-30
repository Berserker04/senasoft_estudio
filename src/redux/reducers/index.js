import { combineReducers } from "redux";

import peopleReducers from "./people";

export default combineReducers({
  people: peopleReducers,
});
