import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./userSlice";

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
