import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage by default
import logger from "redux-logger";
import { combineReducers } from "redux";
import { userReducer } from "./reducer/UserReducer";
import { productReducer } from "./reducer/ProductReducer";

// Redux Persist configuration
const persistConfig = {
  key: "root", // The key for the persisted store
  storage, // The storage method, default is localStorage
  whitelist: ["user"], // Only persist the `user` reducer (optional)
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  // Add more reducers as needed
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(process.env.NODE_ENV === 'production' ? [] : logger), // Disable logger in production
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
