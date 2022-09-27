import { createSlice } from '@reduxjs/toolkit';
import { fetchFreeToWatchList } from './services';
import type { InitialStateType } from './Types';

const STATUSES = {
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
};

export const initialState: InitialStateType = {
  freeToWatchMovieList: [],
  freeToWatchPage: 1,
  status: STATUSES.LOADING,
};

export const freeToWatchMovieSlice = createSlice({
  name: 'freeToWatch',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFreeToWatchList.pending, state => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchFreeToWatchList.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.freeToWatchMovieList = action?.payload;
    });
    builder.addCase(fetchFreeToWatchList.rejected, state => {
      state.status = STATUSES.ERROR;
    });
  },
});

export default freeToWatchMovieSlice.reducer;
