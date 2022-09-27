import { createSlice } from '@reduxjs/toolkit';
import { fetchPopularMovieList } from './services';
import type { InitialStateType } from './Types';

const STATUSES = {
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
};

export const initialState: InitialStateType = {
  popularMovieList: [],
  popularPage: 1,
  status: STATUSES.LOADING,
};

export const popularMovieSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularMovieList.pending, state => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchPopularMovieList.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.popularMovieList = action?.payload;
    });
    builder.addCase(fetchPopularMovieList.rejected, state => {
      state.status = STATUSES.ERROR;
    });
  },
});

export default popularMovieSlice.reducer;
