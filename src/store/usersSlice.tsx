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
  error: string | null;
};

const initialState: InitialState = {
  userList: null,
  error: null,
};

export const setUsers = createAsyncThunk('users/getScore', async () => {
  const fetchUsers = await fetch('https://reqres.in/api/users?page=2');
  const users = await fetchUsers.json();
  return users.data;
});

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
        console.log(payload, 'PAYLOAD');
        state.userList = payload;
      })
      .addCase(setUsers.rejected, (state) => {
        state.error = 'Error occured while fetching users';
      });
  },
});
// export const { logIn } = usersSlice.actions;

export default usersSlice.reducer;
