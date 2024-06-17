import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type UsersData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UsersListProperties[];
};

type UsersListProperties = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

type InitialState = {
  usersData: UsersData | null;
  statusSignIn: string;
  statusSignUp: string;
  statusSetUsers: string;
  userListError: string;
  authError: string;
};

const initialState: InitialState = {
  usersData: null,
  statusSignIn: 'idle',
  statusSignUp: 'idle',
  statusSetUsers: 'idle',
  userListError: '',
  authError: '',
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setUsers.fulfilled, (state, { payload }) => {
        state.usersData = payload;
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
        console.log(payload, 'PAYLOAD');
        state.statusSignIn = 'error';
      });
  },
});

export default usersSlice.reducer;
