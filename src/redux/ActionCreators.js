import * as ActionTypes from "./ActionTypes";

export const addMantis = (mantisId) => ({
  type: ActionTypes.ADD_MANTIS,
  payload: {
    mantisId: mantisId,
  },
});

//practice action creators-----------------
export const addReminder = (text) => ({
  type: ActionTypes.ADD_REMINDER,
  payload: {
    text: text,
  },
});

export const deleteReminder = (reminder) => ({
  type: ActionTypes.DELETE_REMINDER,
  payload: {
    reminder: reminder,
  },
});
