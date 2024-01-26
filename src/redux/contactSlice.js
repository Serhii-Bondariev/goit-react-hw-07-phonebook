import { createSlice } from "@reduxjs/toolkit";
import {
  operationFetcContacts,
  operationAddContact,
  operationDeleteContact,
} from "./operations";

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,

  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(operationFetcContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(operationFetcContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(operationFetcContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(operationAddContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(operationAddContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
})