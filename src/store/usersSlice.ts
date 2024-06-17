import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AsyncStatus, UsersData } from '../types';

type InitialState = {
  usersData: UsersData | null;
  userStatus: AsyncStatus;
  signIn: AsyncStatus;
  signUp: AsyncStatus;
};

const initialState: InitialState = {
  usersData: null,
  userStatus: { status: 'idle' },
  signIn: { status: 'idle' },
  signUp: { status: 'idle' },
};

const apiURL = 'https://reqres.in/api/';

export const setUsers = createAsyncThunk(
  'users/setUsers',
  async (perpage: number) => {
    const fetchUsers = await fetch(`${apiURL}users?page=1&per_page=${perpage}`);
    const data = await fetchUsers.json();
    return data;
  },
);

export const signUp = createAsyncThunk(
  'users/signUp',
  async (
    data: {
      password: FormDataEntryValue | null;
      email: FormDataEntryValue | null;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(`${apiURL}register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const { token } = await response.json();
        if (token) {
          localStorage.setItem('token', token);
        }
        return token;
      } else {
        return rejectWithValue(response.status);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const signIn = createAsyncThunk(
  'users/signIn',
  async (
    data: {
      password: FormDataEntryValue | null;
      email: FormDataEntryValue | null;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(`${apiURL}login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const { token } = await response.json();
        if (token) {
          localStorage.setItem('token', token);
        }
        return token;
      } else {
        return rejectWithValue(response.status);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logOut: (state) => {
      state.userStatus = initialState.userStatus;
      state.usersData = initialState.usersData;
      state.signIn = initialState.signIn;
      state.signUp = initialState.signUp;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUsers.fulfilled, (state, { payload }) => {
        state.usersData = payload;
        state.userStatus.status = 'idle';
      })
      .addCase(setUsers.pending, (state) => {
        state.userStatus.status = 'loading';
      })
      .addCase(setUsers.rejected, (state) => {
        state.userStatus.status = 'error';
      })
      .addCase(signUp.fulfilled, (state) => {
        state.signUp = { status: 'idle' };
      })
      .addCase(signUp.pending, (state) => {
        state.signUp = { status: 'loading' };
      })
      .addCase(
        signUp.rejected,
        (state, { payload }: PayloadAction<number | unknown>) => {
          state.signUp = { status: 'error', error: payload };
        },
      )
      .addCase(signIn.fulfilled, (state) => {
        state.signIn = { status: 'idle' };
      })
      .addCase(signIn.pending, (state) => {
        state.signIn = { status: 'loading' };
      })
      .addCase(
        signIn.rejected,
        (state, { payload }: PayloadAction<number | unknown>) => {
          state.signIn = { status: 'error', error: payload };
        },
      );
  },
});

export const { logOut } = usersSlice.actions;

export default usersSlice.reducer;
