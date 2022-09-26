import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { getData } from '../../services';
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

export const fetchPopularMovieList = createAsyncThunk(
  'popularMovies/fetch',
  async payload => {
    const fetchedData = await getData(payload);
    const {
      data: { results: apiData, page },
      status,
    } = fetchedData;
    return apiData;
  },
);

export const popularMovieSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularMovieList.pending, state => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchPopularMovieList.fulfilled, (state, action) => {
      console.log(action);

      state.status = STATUSES.IDLE;
      state.popularMovieList = action?.payload;
    });
    builder.addCase(fetchPopularMovieList.rejected, state => {
      state.status = STATUSES.ERROR;
    });
  },
});

export const { increment, decrement } = popularMovieSlice.actions;

export default popularMovieSlice.reducer;
