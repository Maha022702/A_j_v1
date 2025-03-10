// Import necessary functions and modules
import { configureStore } from "@reduxjs/toolkit"; // Function to configure and create a Redux store with default middleware.
import rootReducer from "./rootReducer"; // Imports the root reducer, which combines all the application's reducers.
import createSagaMiddleware from "redux-saga"; // Imports `redux-saga` to manage side effects (like async actions) in Redux.
import rootSaga from "./saga/index.js"; // Imports the root saga where all sagas are combined and handled.
import { persistReducer, persistStore } from "redux-persist"; // Functions for persisting Redux state across sessions.
import localforage from "https://unpkg.com/localforage@1.9.0/src/localforage.js"; // LocalForage library used for asynchronous local storage to store Redux state.

// Configuration object for redux-persist to define how and where to store the state.
const persistConfig = {
  key: "root", // Key to store the root reducer's state in storage.
  storage: localforage, // Defines LocalForage as the storage method, allowing async storage (which is not limited by localStorage size constraints).
};

// Creates the Redux Saga middleware.
let sagaMiddleware = createSagaMiddleware(); // This middleware enables running sagas (side effects) in the application.

// Applies the persist reducer to the root reducer using the defined persist configuration.
const persistedReducer = persistReducer(persistConfig, rootReducer); // Enhances the root reducer with persistence capabilities, ensuring that state can be stored and rehydrated.

// Configures the Redux store with the persisted reducer and middleware.
let store = configureStore({
  reducer: persistedReducer, // Uses the persisted reducer which wraps the root reducer.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true, // Ensures that the Redux Thunk middleware (for async actions) is enabled.
      serializableCheck: false, // Disables serializable state check to allow non-serializable values (e.g., localForage) in the state.
    }).concat(sagaMiddleware), // Adds the Redux Saga middleware to the default middleware stack.
});

// Creates a persistor object which will handle persisting and rehydrating the store.
let persistor = persistStore(store); // Initializes the persistor that will manage saving/loading the state from storage.

// Runs the root saga where all other sagas are watched.
sagaMiddleware.run(rootSaga); // Starts the root saga, allowing the app to watch for asynchronous actions.

// Exports the configured store and persistor for use in the application.
export { store, persistor }; // `store` is the Redux store and `persistor` manages state persistence.
