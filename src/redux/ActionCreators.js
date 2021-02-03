import * as ActionTypes from "./ActionTypes";

export const addItem = (mantisId) => ({
  type: ActionTypes.ADD_ITEM,
  payload: {
    mantisId: mantisId,
  },
});

export const deleteItem = (mantisId) => ({
  type: ActionTypes.DELETE_ITEM,
  payload: {
    mantisId: mantisId,
  },
});

//note: mantisId is supplied in the +match.params of the react router
//to go to the specific mantis that is clicked
