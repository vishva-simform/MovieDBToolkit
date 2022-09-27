import { createSlice } from '@reduxjs/toolkit';
import { fetchTrendingMovieList } from './services';
import type { TrendingStateType } from './Types';

const STATUSES = {
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
};

export const initialState: TrendingStateType = {
  trendingList: [],
  trendingPage: 1,
  status: STATUSES.LOADING,
};

export const popularMovieSlice = createSlice({
  name: 'trendingMovies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTrendingMovieList.pending, state => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchTrendingMovieList.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.trendingList = action?.payload;
    });
    builder.addCase(fetchTrendingMovieList.rejected, state => {
      state.status = STATUSES.ERROR;
    });
  },
});

export default popularMovieSlice.reducer;
