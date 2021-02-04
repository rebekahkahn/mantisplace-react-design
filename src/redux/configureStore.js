import { createStore, combineReducers } from "redux";
import { Mantises } from "./mantises";
import { Headers } from "./sidebarnav";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      mantises: Mantises,
      headers: Headers,
    })
  );

  return store;
};

//added items as a reducer to be combined here
