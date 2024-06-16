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
  status: string;
};

const initialState: InitialState = {
  userList: null,
  status: 'idle',
};

export const setUsers = createAsyncThunk('users/setUsers', async () => {
  const fetchUsers = await fetch('https://reqres.in/api/users?per_page=8');
  const users = await fetchUsers.json();
  return users.data;
});

export const singUp = createAsyncThunk(
  'users/singUp',
  async (data: {
    password: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    username: FormDataEntryValue | null;
  }) => {
    const response = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const token = await response.json();
    console.log(token, 'TOKEN');
  },
);

export const singIn = createAsyncThunk(
  'users/singIn',
  async (data: {
    password: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
  }) => {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const token = await response.json();
    console.log(token, 'TOKEN');
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // logIn(state, { payload }: PayloadAction<FormDataEntryValue>) {
    //   state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUsers.fulfilled, (state, { payload }) => {
        state.userList = payload;
        state.status = 'idle';
      })
      .addCase(setUsers.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(setUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(singUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(singIn.pending, (state) => {
        state.status = 'loading';
      });
  },
});
// export const { logIn } = usersSlice.actions;

export default usersSlice.reducer;
