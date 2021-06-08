import * as ActionTypes from "./ActionTypes";

export const Accessories = (
  state = {
    isLoading: true,
    errMess: null,
    accessories: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_ACCESSORIES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        accessories: action.payload,
      };
    case ActionTypes.ACCESSORIES_LOADING:
      return { ...state, isLoading: true, errMess: null, accessories: [] };
    case ActionTypes.ACCESSORIES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
