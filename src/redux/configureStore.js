import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Mantises } from "./mantises";
import { Headers } from "./sidebarnav";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      mantises: Mantises,
      headers: Headers,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
