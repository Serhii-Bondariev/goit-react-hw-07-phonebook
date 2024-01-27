import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items; // змінено selectContacts
export const selectIsLoading = (state) => state.contacts.isLoading; // змінено selectIsLoading
export const selectError = (state) => state.contacts.error; // залишено selectError
export const selectFilter = (state) => state.contacts.filter; // залишено selectFilter

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(normalizedFilter) ||
          contact.phone.includes(normalizedFilter)
      );
    }
    return contacts;
  }
);
