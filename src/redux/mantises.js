import { MANTISES } from "../shared/mantises";
import * as ActionTypes from "./ActionTypes";

export const Mantises = (state = MANTISES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MANTIS:
      const mantis = action.payload;
      mantis.id = state.length;
      return state.concat(mantis);
    default:
      return state;
  }
};
