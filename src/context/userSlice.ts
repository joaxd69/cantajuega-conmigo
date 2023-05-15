import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState : User = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state = payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;