import React, { useEffect, type FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icons, MockData } from '../../assets';
import { Header, LatestTrailer, List } from '../../components';
import {
  EndPoints,
  freeToWatch,
  latestTrailer,
  popularListFilter,
  Strings,
  Trending,
} from '../../constants';
import { fetchPopularMovieList, type RootState } from '../../redux';
import { styles } from './Styles';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovieList(`${EndPoints.popularMovieEndPoint}`));
  }, [dispatch]);
  const popularMovieData = useSelector(
    (state: RootState) => state?.popularMovies?.popularMovieList,
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
          movieList={MockData.movieList}
          filterList={freeToWatch}
        />
        <LatestTrailer
          listTitle={Strings.latestTrailers}
          movieList={MockData.latestTrailer}
          filterList={latestTrailer}
        />
        <List
          listTitle={Strings.Trending}
          movieList={MockData.movieList}
          filterList={Trending}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
