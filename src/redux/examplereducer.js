//example reducer
const initialState = {
  reminders: [],
};

const remindersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REMINDER":
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    case "DELETE_REMINDER":
      return {
        reminders: [
          ...state.reminders.filter((reminder) => reminder !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default remindersReducer;
