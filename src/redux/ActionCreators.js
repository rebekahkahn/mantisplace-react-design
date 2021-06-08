import * as ActionTypes from "./ActionTypes";
import { MANTISES } from "../shared/mantises";
import { ACCESSORIES } from "../shared/accessories";

//mantises------------------------------------------------------------

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

//accessories--------------------------------------------------------

export const fetchAccessories = () => (dispatch) => {
  dispatch(accessoriesLoading());

  setTimeout(() => {
    dispatch(addAccessories(ACCESSORIES));
  }, 2000);
};

export const accessoriesLoading = () => ({
  type: ActionTypes.ACCESSORIES_LOADING,
});

export const accessoriesFailed = (errMess) => ({
  type: ActionTypes.ACCESSORIES_FAILED,
  payload: errMess,
});

export const addAccessories = (accessories) => ({
  type: ActionTypes.ADD_ACCESSORIES,
  payload: accessories,
});
