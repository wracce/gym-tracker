import { createSlice } from '@reduxjs/toolkit';
import { User } from './user';
import { authApi } from '../api/auth-api';
import { useNavigate } from 'react-router-dom';

type AuthState =
  | {
      isAuthenticated: false;
      user?: User;
    }
  | { isAuthenticated: true; user: User };

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      console.log('LOGOIUT!');
      navigate('login');
        state.isAuthenticated = false;
        state.user = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state: AuthState, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
    });
  },
});

export const { logout } = authSlice.actions

