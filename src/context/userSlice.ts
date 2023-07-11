import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { User } from "../types";
interface initialState{
  user:User,
  isLoading:boolean
}
const initialState :initialState={
 user: {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
},
 isLoading:true
}

const userSlice = createSlice({
  name: "ActualUser",
  initialState,
  reducers: {
    setUser(state, action:PayloadAction<any> ) {
      state.user = action.payload;
      state.isLoading=false
      console.log(state)
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;