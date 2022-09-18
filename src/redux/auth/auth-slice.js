import { createSlice } from '@reduxjs/toolkit';

import { signup, login } from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, action) => {
      store.loading = false;
      store.user = action.payload.user;
      store.token = action.payload.token;
      store.isLogin = true;
      store.error = null;
    },
    [signup.rejected]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
      console.log(action.payload);
    },

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, action) => {
      store.loading = false;
      store.user = action.payload.user;
      store.token = action.payload.token;
      store.isLogin = true;
      store.error = null;
    },
    [login.rejected]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
    },
  },
});

export default authSlice.reducer;
