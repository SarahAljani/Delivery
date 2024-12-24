import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as default storage
import rootReducer from "./combiner"; // Your combined reducers

// Redux Persist Configuration
const persistConfig = {
  key: "root", // Key for the root of the persisted state
  storage, // Storage engine to use (localStorage in this case)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);
