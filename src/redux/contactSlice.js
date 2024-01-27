import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const contacts = await api.fetchContacts();
  return contacts;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const newContact = await api.addContact(contact);
    return newContact;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    await api.deleteContact(contactId);
    return { id: contactId };
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: "", // Додайте поле filter в стан
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const deletedContactId = action.payload.id;
        state.items = state.items.filter(
          (contact) => contact.id !== deletedContactId
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: contactsReducer, actions } = contactsSlice;
export const { changeFilter } = actions;
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.contacts.filter;

export default contactsSlice.reducer;
