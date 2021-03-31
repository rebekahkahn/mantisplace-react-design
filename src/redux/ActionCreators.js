import * as ActionTypes from "./ActionTypes";
import { MANTISES } from "../shared/mantises";

export const fetchMantises = () => (dispatch) => {
  dispatch(mantisesLoading());

  setTimeout(() => {
    dispatch(addMantises(MANTISES));
  }, 2000);
};

export const mantisesLoading = () => ({
  type: ActionTypes.MANTISES_LOADING,
});

export const mantisesFailed = (errMess) => ({
  type: ActionTypes.MANTISES_FAILED,
  payload: errMess,
});

export const addMantises = (mantises) => ({
  type: ActionTypes.ADD_MANTISES,
  payload: mantises,
});
