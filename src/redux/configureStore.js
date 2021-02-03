import { createStore, combineReducers } from "redux";
import { Items } from "./cart";
import { Mantises } from "./mantises";
import { Headers } from "./sidebarnav";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      mantises: Mantises,
      headers: Headers,
      items: Items,
    })
  );

  return store;
};

//added items as a reducer to be combined here
