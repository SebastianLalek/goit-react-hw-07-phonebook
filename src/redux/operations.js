import axios from 'axios';
const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL =
  'https://656c835ce1e03bfd572e6879.mockapi.io/phonebook/';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
