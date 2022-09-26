import React, { type FC } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  type ListRenderItemInfo,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { baseUrls } from '../../constants';
import { getListItemData } from '../../services';
import { Colors, Icons } from '../../theme';
import DropDown from '../DropDown/DropDown';
import { styles } from './ListStyles';
import type { ListProp, ResultType } from './ListTypes';

const List: FC<ListProp> = ({ listTitle, movieList, filterList }) => {
  const listItem: FC<ListRenderItemInfo<ResultType>> = ({ item }) => {
    const { votePercentage, activeStrokeColor, inActiveStrokeColor, date } =
      getListItemData(item);

    return (
      <TouchableOpacity>
        <View>
          <Image
            style={styles.posterStyle}
            source={{
              uri: `${baseUrls.imageURL}${item?.poster_path}`,
            }}
          />
          <TouchableOpacity style={styles.dotsContainer}>
            <Image source={Icons.dots} style={styles.dotImage} />
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <CircularProgress
              value={votePercentage}
              valueSuffix={'%'}
              radius={23}
              activeStrokeWidth={4}
              inActiveStrokeWidth={5}
              circleBackgroundColor={Colors.DarkBlue}
              inActiveStrokeColor={inActiveStrokeColor}
              activeStrokeColor={activeStrokeColor}
              inActiveStrokeOpacity={0.3}
              delay={150}
              duration={2100}
            />
          </View>
        </View>
        <View style={styles.movieTitlesSec}>
          <Text numberOfLines={2} style={styles.movieTitle}>
            {item?.original_title ?? item?.original_name}
          </Text>
          <Text style={styles.releaseDate}>{date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.ListtitleStyle}>{listTitle}</Text>
        <DropDown filterList={filterList} />
      </View>
      <View>
        <FlatList
          horizontal={true}
          contentContainerStyle={styles.movieListContainer}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          data={movieList?.results ?? []}
          renderItem={listItem}
        />
      </View>
    </View>
  );
};

export default List;
