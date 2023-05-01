import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      // return state.filter((item) => item !== action.payload);
     state.splice(action.payload,1)
    },
    clearAllUsers(state, action) {
    return []
    },
  },
});

export { userSlice };
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
