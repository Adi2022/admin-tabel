import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      return state.filter((item) => item !== action.payload);
    },
    clearAllUsers(state, action) {
      return state.filter((item) => item === action.payload);
    },
  },
});

export { userSlice };
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
