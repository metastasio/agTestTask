import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './index';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
export const createAppSelector = createSelector.withTypes<RootState>();

export const selectUsers = (state: RootState) => state.users.userList;

export const selectCurrentUser = (currentId: number | undefined) =>
  createAppSelector(selectUsers, (users) =>
    users?.find(({ id }) => id === currentId),
  );
