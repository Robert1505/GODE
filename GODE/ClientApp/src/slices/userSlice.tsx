import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  username: string;
  isLoggedIn: boolean;
}

const INITIAL_STATE: UserState = {
  id: "",
  username: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action: { payload: UserState }) => {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    logout: (state) => {
        state.isLoggedIn = false;
        state.id = '';
        state.username = '';
    }
  },
});

export const { login, logout } = userSlice.actions;

