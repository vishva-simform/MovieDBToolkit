import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { InitialStateType } from './Types';

const STATUSES = {
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
};
export const initialState: InitialStateType = {
  popularMovieList: [],
  popularPage: 1,
};
export const fetchTodoList = createAsyncThunk('todos/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
});

export const popularMovieSlice = createSlice({
  name: 'popularMovie',
  initialState,
  reducers: {
    increment: (state: InitialStateType, action: PayloadAction<number>) => {
      state.value += Number(action?.payload);
    },
    decrement: (state: InitialStateType, action: PayloadAction<number>) => {
      state.value -= Number(action?.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodoList.pending, state => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.todos = action?.payload;
    });
    builder.addCase(fetchTodoList.rejected, state => {
      state.status = STATUSES.ERROR;
    });
  },
});

export const { increment, decrement } = popularMovieSlice.actions;

export default popularMovieSlice.reducer;
