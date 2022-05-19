import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    // We are going to be adding three reducers here which are: addUser, editUSer, deleteUser.
    addUser: (state, action) => {
      // we write the code for adding a user (usually done by writting a http POST method here).
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      
    }
  },
});

// the reducerslice must be exported so that it can be used in the global store
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
