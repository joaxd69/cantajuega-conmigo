import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import isLoading from "./loadingSlice";
import { useDispatch ,TypedUseSelectorHook,useSelector} from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
const rootReducer = {
  userReducer,
  authReducer,
  isLoading
};

const store = configureStore({
  reducer: rootReducer,
});

type RootState=ReturnType<typeof store.getState>
type AppDispatch=typeof store.dispatch

setupListeners(store.dispatch)
////////////hooks
export const useAppDispatch=()=>useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector

export default store;