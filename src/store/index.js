import { configureStore } from "@reduxjs/toolkit";
import user from "./user-slice";
import { combineReducers } from "redux";

const reducers = combineReducers({ user: user });
const store = configureStore({ reducer: reducers });

export default store;
