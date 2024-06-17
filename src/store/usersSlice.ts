import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type userListProperties = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

type InitialState = {
  userList: userListProperties[] | null;
  statusSignIn: string;
  statusSignUp: string;
  statusSetUsers: string;
  userListError: string;
  authError: string;
};

const initialState: InitialState = {
  userList: null,
  statusSignIn: 'idle',
  statusSignUp: 'idle',
  statusSetUsers: 'idle',
  userListError: '',
  authError: '',
};

const apiURL = 'https://reqres.in/api/';

export const setUsers = createAsyncThunk('users/setUsers', async () => {
  const fetchUsers = await fetch(`${apiURL}users?per_page=8`);
  const users = await fetchUsers.json();
  return users.data;
});

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setUsers.fulfilled, (state, { payload }) => {
        state.userList = payload;
        state.statusSetUsers = 'idle';
      })
      .addCase(setUsers.rejected, (state) => {
        state.statusSetUsers = 'error';
      })
      .addCase(setUsers.pending, (state) => {
        state.statusSetUsers = 'loading';
      })
      .addCase(signUp.pending, (state) => {
        state.statusSignUp = 'loading';
      })
      .addCase(signUp.rejected, (state) => {
        state.statusSignUp = 'error';
      })
      .addCase(signIn.pending, (state) => {
        state.statusSignIn = 'loading';
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        console.log(payload, 'PAYLOAD')
        state.statusSignIn = 'error';
      });
  },
});

export default usersSlice.reducer;
