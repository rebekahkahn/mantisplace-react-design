import { MANTISES } from "../shared/mantises";
import * as ActionTypes from "./ActionTypes";

const initialState = {
  MANTISES,
  items: [],
};

export const Mantises = (state = initialState, action) => {
  switch (action.type) {
    //must edit the additem and deleteitem cases
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item !== action.payload)],
      };
    default:
      return state.MANTISES;
  }
};

//want to return the mantises array at all times
//want to add mantis to items array at the end of action

//NOTE: I will get the delete mantis action working AFTER getting the add mantis action working...
