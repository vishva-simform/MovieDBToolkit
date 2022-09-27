import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { freeToWatchMovieReducer } from './FreeToWatch';
import { popularMovieReducer } from './PopularMovies';
import { latestTrailerReducer } from './LatestTrailer';
import { trendingReducer } from './Trending';

const persistConfig = {
  key: 'Moviedbtoolkitdemo',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  popularMovies: popularMovieReducer,
  freeToWatchMovies: freeToWatchMovieReducer,
  latestTrailers: latestTrailerReducer,
  trendingMovies: trendingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
