import { MANTISES } from "../shared/mantises";
import { HEADERS } from "../shared/sidebarnav";

export const initialState = {
  mantises: MANTISES,
  headers: HEADERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
