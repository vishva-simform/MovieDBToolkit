import { createSlice } from '@reduxjs/toolkit';
import { fetchLatestTrailer } from './services';
import type { LatestTrailerStateType } from './Types';

const STATUSES = {
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
};

export const initialState: LatestTrailerStateType = {
  latestTrailerList: [],
  latestTrailerPage: 1,
  status: STATUSES.LOADING,
};

export const latestTrailerSlice = createSlice({
  name: 'latestTrailer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLatestTrailer.pending, state => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchLatestTrailer.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.latestTrailerList = action?.payload;
    });
    builder.addCase(fetchLatestTrailer.rejected, state => {
      state.status = STATUSES.ERROR;
    });
  },
});

export default latestTrailerSlice.reducer;
