import React, { useEffect, type FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../assets';
import { Header, LatestTrailer, List } from '../../components';
import {
  EndPoints,
  freeToWatch,
  latestTrailer,
  popularListFilter,
  Strings,
  Trending,
} from '../../constants';
import {
  fetchFreeToWatchList,
  fetchLatestTrailer,
  fetchPopularMovieList,
  fetchTrendingMovieList,
  type RootState,
} from '../../redux';
import { styles } from './Styles';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovieList(`${EndPoints.popularMovieEndPoint}`));
    dispatch(fetchFreeToWatchList(`${EndPoints.freeToWatchEndPoint}`));
    dispatch(fetchLatestTrailer(`${EndPoints.latestTrailerEndPoint}`));
    dispatch(fetchTrendingMovieList(`${EndPoints.trendingEndPoint}`));
  }, [dispatch]);
  const popularMovieData = useSelector(
    (state: RootState) => state?.popularMovies?.popularMovieList,
  );
  const freeToWatchData = useSelector(
    (state: RootState) => state?.freeToWatchMovies?.freeToWatchMovieList,
  );
  const latestTrailerData = useSelector(
    (state: RootState) => state?.latestTrailers?.latestTrailerList,
  );

  const trendingMovieData = useSelector(
    (state: RootState) => state?.trendingMovies?.trendingList,
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header
        rightIcon={Icons.hamburgerIcon}
        centerIcon={Icons.movieDbIcon}
        leftIcon={Icons.searchIcon}
      />
      <ScrollView bounces={false}>
        <List
          listTitle={Strings.whatsPopular}
          movieList={popularMovieData}
          filterList={popularListFilter}
        />
        <List
          listTitle={Strings.freeToWatch}
          movieList={freeToWatchData}
          filterList={freeToWatch}
        />
        <LatestTrailer
          listTitle={Strings.latestTrailers}
          movieList={latestTrailerData}
          filterList={latestTrailer}
        />
        <List
          listTitle={Strings.Trending}
          movieList={trendingMovieData}
          filterList={Trending}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
