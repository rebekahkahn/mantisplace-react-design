import * as ActionTypes from "./ActionTypes";

export const addMantis = (mantisId) => ({
  type: ActionTypes.ADD_MANTIS,
  payload: {
    mantisId: mantisId,
  },
});
