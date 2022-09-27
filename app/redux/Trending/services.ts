import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../services';

export const fetchTrendingMovieList = createAsyncThunk(
  'trending/fetch',
  async payload => {
    const fetchedData = await getData(payload);
    const {
      data: { results: apiData, page },
      status,
    } = fetchedData;
    return apiData;
  },
);
