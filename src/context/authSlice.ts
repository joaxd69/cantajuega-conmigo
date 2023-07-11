import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
interface initialState{
  isAuthenticated:boolean
}
const initialState :initialState={
  isAuthenticated:false
}

const authSlice = createSlice({
  name: "Authenticate",
  initialState,
  reducers: {
    setAuth(state, action:PayloadAction<boolean> ) {
        state.isAuthenticated=action.payload
    }
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;