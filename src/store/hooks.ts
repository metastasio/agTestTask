import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './index';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
export const createAppSelector = createSelector.withTypes<RootState>();

// export const selectUsers = (state) => state.modal;
export const selectCurrentUser = (currentId: string | undefined) =>
  createAppSelector([(state) => state.users.userList], (users) =>
    users?.find(({ id }) => id === Number(currentId)),
  );
