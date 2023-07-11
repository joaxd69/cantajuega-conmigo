import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
interface initialState{
  status:boolean
}
const initialState :initialState={
  status:true
}

const isLoading = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setLoading(state, action:PayloadAction<boolean> ) {
        state.status=action.payload
    }
  },
});
export const { setLoading } = isLoading.actions;
export default isLoading.reducer;