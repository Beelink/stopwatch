import { createStore, compose } from "redux";
import initialState from "./initialState";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  initialState,
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);

export default store;
