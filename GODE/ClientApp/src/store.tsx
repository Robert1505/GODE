import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);


export default configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});
