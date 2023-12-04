import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// const contactsSlice = createSlice({
//   name: 'phonebook',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//       if (
//         state.contacts.find(
//           contact =>
//             contact.name.toLowerCase() === action.payload.name.toLowerCase()
//         )
//       ) {
//         return Notiflix.Report.failure(
//           'Error',
//           `${action.payload.name} is already in contacts`,
//           'OK'
//         );
//       }
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     filterContacts(state, action) {
//       state.filter = action.payload;
//     },
//     loadFromLoacalStorage(state, action) {
//       state.contacts = action.payload;
//     },
//   },
// });

export const contactsReducer = contactsSlice.reducer;

// export const {
//   addContact,
//   deleteContact,
//   filterContacts,
//   loadFromLoacalStorage,
// } = contactsSlice.actions;
