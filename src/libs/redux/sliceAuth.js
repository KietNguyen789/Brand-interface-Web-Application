import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const destination_server = "http://localhost:3000";

// Initial state
const initialState = {
  token: localStorage.getItem('authToken') || null,
  user: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null,
  loading: false,
  error: null,
};

// Async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    const body = {
      data: {
        username: credentials.username,
        password: credentials.password,
      },
    };
    const response = await axios.post(`${destination_server}/auth/login`, body);

    // Log the entire response for debugging
    console.log('Response:', response);

    // Extract headers
    const authToken = response.headers['authorization'];
    const authority = JSON.parse(response.headers['authority']);

    console.log('Authorization Token:', authToken);
    console.log('Authority:', authority);

    // Return both token and user information
    return {
      authToken,
      authority,
    };
  }
);

// Create slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.authToken;
        state.user = action.payload.authority;

        localStorage.setItem('authToken', action.payload.authToken);
        localStorage.setItem('authUser', JSON.stringify(action.payload.authority));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
