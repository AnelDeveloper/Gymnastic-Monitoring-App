import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/reducer";

export const reducer = combineReducers({
  user: userReducer,
});

const middleware = (getDefaultMiddleware) => {
  const middlewareArray = getDefaultMiddleware();
  return middlewareArray;
};

export const store = configureStore({
  reducer,
  middleware,
});