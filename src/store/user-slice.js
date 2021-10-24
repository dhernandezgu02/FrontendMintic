import { createSlice } from "@reduxjs/toolkit";
export const userslice = createSlice({
  name: "users",
  initialState: {
    isLogged: true,
  },
  reducers: {
    setValue: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});
export const userActions = userslice.actions;
export default userslice.reducer;
