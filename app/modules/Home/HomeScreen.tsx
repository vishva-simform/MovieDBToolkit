import React, { type FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Icons, MockData } from '../../assets';
import { Header, LatestTrailer, List } from '../../components';
import {
  freeToWatch,
  latestTrailer,
  popularListFilter,
  Strings,
  Trending,
} from '../../constants';
import { styles } from './Styles';

const HomeScreen: FC = () => {
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
          movieList={MockData.movieList}
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
