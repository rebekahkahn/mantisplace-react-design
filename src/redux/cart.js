import * as ActionTypes from "./ActionTypes";

const initialState = {
  items: [],
};

export const Items = (state = initialState, action) => {
  switch (action.type) {
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
      return state;
  }
};

//I want the state to be an empty array
//then once the action is carried out,
