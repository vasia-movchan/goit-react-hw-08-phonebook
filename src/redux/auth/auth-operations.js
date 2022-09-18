import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'services/api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = { status, message: data.keyValue.email };
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const result = await api.login(data);
    return result;
  } catch ({ response }) {
    const error = response.status;
    return thunkAPI.rejectWithValue(error);
  }
});

// const isDublicate = ({ name }, contacts) => {
//   const normalizedName = name.toLowerCase();

//   const result = contacts.find(item => {
//     return normalizedName === item.name.toLowerCase();
//   });

//   return Boolean(result);
// };

// export const addContact = createAsyncThunk(
//   'contacts/add',
//   async (data, thunkAPI) => {
//     try {
//       const result = await api.addContact(data);
//       return result;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
//   {
//     condition: (data, { getState }) => {
//       const { contacts } = getState();
//       if (isDublicate(data, contacts.items)) {
//         alert(`${data.name} is already in contacts`);
//         return false;
//       }
//     },
//   }
// );

// export const removeContact = createAsyncThunk(
//   'contacts/remove',
//   async (id, thunkAPI) => {
//     try {
//       await api.removeContact(id);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
