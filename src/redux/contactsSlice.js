import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact(state, action) {
      if (
        state.contacts.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return Notiflix.Report.failure(
          'Error',
          `${action.payload.name} is already in contacts`,
          'OK'
        );
      }
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    loadFromLoacalStorage(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const {
  addContact,
  deleteContact,
  filterContacts,
  loadFromLoacalStorage,
} = contactsSlice.actions;
