import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../services';

export const fetchFreeToWatchList = createAsyncThunk(
  'freeToWatch/fetch',
  async payload => {
    const fetchedData = await getData(payload);
    const {
      data: { results: apiData, page },
      status,
    } = fetchedData;
    return apiData;
  },
);
