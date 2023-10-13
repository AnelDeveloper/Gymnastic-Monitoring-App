import { fetchUsers, postUser } from "./actions";


export const extraReducers = (builder) => {
  builder
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    })
    .addCase(postUser.fulfilled, (state, action) => {
      state.postSuccess = true;
    })
    .addCase(postUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
};
