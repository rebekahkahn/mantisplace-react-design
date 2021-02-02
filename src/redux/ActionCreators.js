import * as ActionTypes from "./ActionTypes";

export const addMantis = (mantisId) => ({
  type: ActionTypes.ADD_MANTIS,
  payload: {
    mantisId: mantisId,
  },
});

//practice action creator
export const addReminder = (text) => ({
  type: ActionTypes.ADD_REMINDER,
  payload: {
    text: text,
  },
});
