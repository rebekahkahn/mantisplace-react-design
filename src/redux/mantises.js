import * as ActionTypes from "./ActionTypes";

export const Mantises = (
  state = {
    isLoading: true,
    errMess: null,
    mantises: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_MANTISES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        mantises: action.payload,
      };
    case ActionTypes.MANTISES_LOADING:
      return { ...state, isLoading: true, errMess: null, mantises: [] };
    case ActionTypes.MANTISES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
