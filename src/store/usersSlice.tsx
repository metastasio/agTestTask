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
  status: 'Idle',
};

export const setUsers = createAsyncThunk('users/setUsers', async () => {
  const fetchUsers = await fetch('https://reqres.in/api/users?page=2');
  const users = await fetchUsers.json();
  return users.data;
});

export const singUp = createAsyncThunk(
  'users/singUp',
  async (data: {
    password: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
  }) => {
    console.log(JSON.stringify(data));
    const response = await fetch('https://reqres.in/api/register', {
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
        state.status = 'Idle';
      })
      .addCase(setUsers.rejected, (state) => {
        state.status = 'Error occured while fetching users';
      })
      .addCase(setUsers.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(singUp.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(singUp.rejected, (state, { payload }) => {
        console.log(payload, 'PAYLOAD');
        state.status = 'Loading...';
      });
  },
});
// export const { logIn } = usersSlice.actions;

export default usersSlice.reducer;
