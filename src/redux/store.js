import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice"; // Замініть на вірний шлях

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export const persistor = store;
