import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch, getState }) => {
    const { username, password } = credentials;
    // Simula una llamada a API
    if (username === 'admin' && password === 'admin') {
      return { token: 'fake-jwt-token', userRole: 'ADMIN' };
    } else if (username === 'customer' && password === 'customer') {
      return { token: 'fake-jwt-token', userRole: 'CUSTOMER' };
    }
    throw new Error('Authentication failed');
  }
);
