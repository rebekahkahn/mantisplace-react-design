import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Mantises } from "./mantises";
import { Headers } from "./sidebarnav";
import { Accessories } from "./accessories";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      mantises: Mantises,
      headers: Headers,
      accessories: Accessories,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
