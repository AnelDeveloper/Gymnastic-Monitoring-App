import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./extraReducers";

const initialState = {
  users: [],
  postSuccess: false,
  error: null,
  notification: null, 

};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    }
  },
  extraReducers,
});


export const { setNotification, clearNotification } = userSlice.actions; // Exporting new actions
export default userSlice.reducer;