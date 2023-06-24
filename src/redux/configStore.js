import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// slices
import wishListReducer from "./wishList/wishListReducer";
import authReducer from "./auth/authReducer";
import globalModalsReducer from "./globalModals/globalModalsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["wishList"],
}

const reducers = combineReducers({
  wishList: wishListReducer,
  globalModals: globalModalsReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: persistedReducer,
});

export const persistor = persistStore(store)

export default store;
